import { useState, useEffect } from 'react'
import './App.css'
import Auth from './utils/Auth'
import Events from './routes/ScheduledEvents'
import Navigation from './utils/NavBar'
import LogOut from '@/utils/LogOut'
import Footer from '../pages/Footer'
import BackDrop from './utils/BackDrop'



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

  const handleView = () => {
    return !sessionToken
      ? <Auth updateLocalStorage={updateLocalStorage} />
      : <Events sessionToken={sessionToken} />
  }



  return (
    <>
      <Navigation />
      <BackDrop />
      {handleView()}
      <LogOut />
      <Footer />
    </>
  )
}

export default App
