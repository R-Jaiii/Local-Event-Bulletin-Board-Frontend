import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import PrivacyPolicy from '../../pages/PrivacyPolicy'
import TermsOfService from '../../pages/TermsOfService'
import ReportPost from '../../pages/ReportPost';


function Navigation() {
  return (
    <Router>
        <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        </nav>

    <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/report" element={<ReportPost />} />
    </Routes>
    </Router>
  )
}

export default Navigation;
