import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css'
import Auth from './utils/Auth'
import AdminAuth from './utils/AdminAuth';
import Events from './routes/ScheduledEvents'
import Navigation from './utils/NavBar'
import LogOut from '@/utils/LogOut'
import Footer from './utils/Footer'
import BackDrop from './assets/BackDrop'




function App() {
  
  const [sessionToken, setSessionToken] = useState(undefined)
  console.log("Value of our session token", sessionToken)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"))
    }
  }, [])

  const updateLocalStorage = newToken => {
    localStorage.setItem("token", newToken)
    setSessionToken(newToken)
  }

  const MainView = () => {
    if (!sessionToken) {
      return (
        <>
          <Router>
            <Routes>
              <Route path="/" element={<Auth updateLocalStorage={updateLocalStorage} />} />
              <Route path="/admin" element={<AdminAuth updateLocalStorage={updateLocalStorage} />} />
            </Routes>
          </Router>
        </>
      );
    } else {
      return <Events sessionToken={sessionToken} />;
    }
  };
  
  
  return (
    <>
    <Navigation />
    <BackDrop />
    {MainView()}
    <LogOut />
    <Footer />
    </>
  )
}

export default App
