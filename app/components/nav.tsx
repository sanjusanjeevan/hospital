"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#4CAF50', padding: '10px' }}>
      {/* Left Side - Hospital Name or Logo */}
      <div>
        <h1 style={{ color: 'white', margin: 0 }}>Hospital Name</h1>
      </div>

      {/* Right Side - Social Media Icons */}
      <div style={{ display: 'flex', gap: '15px' }}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} style={{ color: '#4267B2', fontSize: '20px' }} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={{ color: '#E1306C', fontSize: '20px' }} />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} style={{ color: '#FF0000', fontSize: '20px' }} />
        </a>
        <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25D366', fontSize: '20px' }} />
        </a>
      </div>
    </nav>
  );
}
