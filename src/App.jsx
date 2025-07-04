import { useState, useEffect } from 'react'
import './App.css'
import Auth from './utils/Auth'
import Events from './Routes/ScheduledEvents'
import Navigation from './utils/Navigation'


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

  const logout = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token")
      setSessionToken(undefined)
    }
  }

  return (
    <>
    <Navigation />
      {handleView()}
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default App
