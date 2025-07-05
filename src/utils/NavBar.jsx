import { Input } from "@chakra-ui/react";
import React from 'react';
import './NavBar.css';

export default function NavBar({ searchTerm, setSearchTerm }) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          🪴 Friendly Fence
        </a>

        <nav className="navbar-links">
          <a href="/about" className="navbar-link">About</a>
          <a href="/contact" className="navbar-link">Contact</a>
          <a href="/events" className="navbar-link">Events</a>
          <a href="/login" className="navbar-link">Login</a>
          <a href="/register" className="navbar-link">Register</a>
        </nav>

       
      </div>
     
      <div className="navbar-search">
        <Input
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          maxW="300px"
        />
      </div>
    </header>
  );
}
