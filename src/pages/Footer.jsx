import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Contact Me</h3>
      <div className="footer-links">
        <a href="mailto:sobikasm@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope /> sobikasm@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/sobika-s-m-bb6ab42ba/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/SOBIKASM" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="tel:+919751515795">
          <FaPhone /> 9751515795
        </a>
      </div>
      <p>© 2025 Sobika S M. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer;
