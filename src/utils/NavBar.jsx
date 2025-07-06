import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Input } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import './NavBar.css';
import About from '/pages/About';
import Contact from '/pages/Contact';
import AddEvents from '@/routes/CreateEvent';



export default function NavBar({ searchTerm, setSearchTerm  }) {

  const [sessionToken, setSessionToken] = useState(undefined)
    console.log("Value of our session token", sessionToken)
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"))
    }
  },[])
  
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          🪴 Friendly Fence 🪴
        </a>

        <nav className="navbar-links">
          <a href="/events" className="navbar-link">Add Events</a>
          <a href="./about" className="navbar-link">About</a>
          <a href="/contact" className="navbar-link">Contact</a>
          <a href="/admin" className="navbar-link">Admin Login</a>
          
        </nav>
      </div>

      <Router>
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<AddEvents sessionToken={sessionToken} />} />
          
          
        </Routes>
        <div className="navbar-search">
          <Input
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </Router>
    </header>
  );
}
