import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../../pages/About'
import Contact from '../../pages/Contact'

function Navigation() {
  return (
    <>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <Router>
          <Routes>
            <Route path="/" element={<h1>Friendly Fence Bulletin</h1>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
    </>
  )
}

export default Navigation

