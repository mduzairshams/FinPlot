import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top pb-3 pt-3 border-bottom" 
         style={{
           backgroundColor: "#FFFFFF", 
           color: "#333",
           boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
           backdropFilter: "blur(10px)",
           transition: "all 0.3s ease"
         }}>
             <div className="container">
         <Link className="navbar-brand" to="/">
                                 <h3 style={{
            color:"#387ED1", 
            fontWeight:"bolder", 
            fontFamily:"Verdana",
            margin: 0,
            fontSize: "1.5rem",
            transition: "all 0.3s ease",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.textShadow = "0 2px 8px rgba(56, 126, 209, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.textShadow = "none";
          }}
          >FinPlot</h3>
         </Link>
         <button
           className="navbar-toggler"
           type="button"
           data-bs-toggle="collapse"
           data-bs-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent"
           aria-expanded="false"
           aria-label="Toggle navigation"
         >
           <span className="navbar-toggler-icon"></span>
         </button>
                   <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/signup"
                style={{
                  color: isActive('/signup') ? '#387ED1' : '#333',
                  fontWeight: isActive('/signup') ? '600' : '400',
                  transition: 'all 0.3s ease'
                }}
                                 onMouseEnter={(e) => {
                   if (!isActive('/signup')) {
                     e.target.style.color = '#387ED1';
                     e.target.style.transform = 'translateY(-2px)';
                     e.target.style.textShadow = '0 2px 8px rgba(56, 126, 209, 0.2)';
                   }
                 }}
                 onMouseLeave={(e) => {
                   if (!isActive('/signup')) {
                     e.target.style.color = '#333';
                     e.target.style.transform = 'translateY(0)';
                     e.target.style.textShadow = 'none';
                   }
                 }}
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/about"
                style={{
                  color: isActive('/about') ? '#387ED1' : '#333',
                  fontWeight: isActive('/about') ? '600' : '400',
                  transition: 'all 0.3s ease'
                }}
                                 onMouseEnter={(e) => {
                   if (!isActive('/about')) {
                     e.target.style.color = '#387ED1';
                     e.target.style.transform = 'translateY(-2px)';
                     e.target.style.textShadow = '0 2px 8px rgba(56, 126, 209, 0.2)';
                   }
                 }}
                 onMouseLeave={(e) => {
                   if (!isActive('/about')) {
                     e.target.style.color = '#333';
                     e.target.style.transform = 'translateY(0)';
                     e.target.style.textShadow = 'none';
                   }
                 }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/products"
                style={{
                  color: isActive('/products') ? '#387ED1' : '#333',
                  fontWeight: isActive('/products') ? '600' : '400',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive('/products')) {
                    e.target.style.color = '#387ED1';
                    e.target.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/products')) {
                    e.target.style.color = '#333';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/pricing"
                style={{
                  color: isActive('/pricing') ? '#387ED1' : '#333',
                  fontWeight: isActive('/pricing') ? '600' : '400',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive('/pricing')) {
                    e.target.style.color = '#387ED1';
                    e.target.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/pricing')) {
                    e.target.style.color = '#333';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/support"
                style={{
                  color: isActive('/support') ? '#387ED1' : '#333',
                  fontWeight: isActive('/support') ? '600' : '400',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive('/support')) {
                    e.target.style.color = '#387ED1';
                    e.target.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/support')) {
                    e.target.style.color = '#333';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                Support
              </Link>
            </li>
            <li className="nav-item ms-3">
              <a 
                className="btn"
                href="https://fin-plot.vercel.app/holdings"
                target="_blank"
                rel="noopener noreferrer"
                                 style={{
                   background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                   color: '#333',
                   border: 'none',
                   borderRadius: '12px',
                   padding: '10px 24px',
                   fontWeight: '600',
                   textDecoration: 'none',
                   boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4), 0 4px 12px rgba(255, 165, 0, 0.3)',
                   transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                   position: 'relative',
                   overflow: 'hidden',
                   transform: 'perspective(1000px) rotateX(0deg)'
                 }}
                                 onMouseEnter={(e) => {
                   e.target.style.transform = 'translateY(-3px) scale(1.08) perspective(1000px) rotateX(5deg)';
                   e.target.style.boxShadow = '0 12px 30px rgba(255, 215, 0, 0.5), 0 8px 20px rgba(255, 165, 0, 0.4)';
                   e.target.style.filter = 'brightness(1.1)';
                 }}
                 onMouseLeave={(e) => {
                   e.target.style.transform = 'translateY(0) scale(1) perspective(1000px) rotateX(0deg)';
                   e.target.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.4), 0 4px 12px rgba(255, 165, 0, 0.3)';
                   e.target.style.filter = 'brightness(1)';
                 }}
              >
                Kite
              </a>
            </li>
            <li className="nav-item ms-2">
              <Link 
                className="nav-link" 
                to="/"
                style={{
                  color: isActive('/') ? '#387ED1' : '#333',
                  fontWeight: isActive('/') ? '600' : '400',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive('/')) {
                    e.target.style.color = '#387ED1';
                    e.target.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/')) {
                    e.target.style.color = '#333';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                <i className="fa-solid fa-grip-lines"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
