import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-logo">🪴 Friendly Fence Bulletin</p>

        <nav className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/report">Report a Post</a>
        </nav>
        
        <p className="footer-address">
          123 Garden Lane, Green City, GC 45678
        </p>
        <p className="footer-email">
          support@friendlyfence.com
        </p>
        <p className="footer-phone">
          Call us: <a href="tel:+1234567890">+1 (234) 567-890</a>
        </p>

        <p className="footer-social">
          Follow us on:
          <a href="https://twitter.com/friendlyfence" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com/friendlyfence" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com/friendlyfence" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>

        <p className="footer-copy">&copy; {new Date().getFullYear()} Friendly Fence Bulletin. All rights reserved.</p>
      </div>
    </footer>
  );
}
