import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg sticky-top  pb-3 pt-3 border-bottom" style={{color: "#FFF"}}>
      <div class="container">
        <Link class="navbar-brand" to="/">
          <h3 style={{color:"#387ED1", marginRight:"3rem", fontWeight:"bolder", fontFamily:"Verdana"}}>FinPlot</h3>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
          <form  role="search">
            <ul class="navbar-nav mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item dropdown">
                <Link class="nav-link active" to="/products">
                Products
              </Link>             
            </li>
            <li class="nav-item dropdown">
                <Link class="nav-link active" to="/pricing">
                Pricing
              </Link>
              </li>
            <li class="nav-item dropdown">
                <Link class="nav-link active" to="/support">
                Support
              </Link>
              </li>
              <li class="nav-item">
              <a  class="nav-link active" style={{textDecoration: "none", color: "black"}} target="/" href="https://fin-plot.vercel.app/holdings">
                Kite
              </a>
            </li>
              <li class="nav-item dropdown">
                <Link class="nav-link active" to="/">
                <i class="fa-solid fa-grip-lines"></i>
              </Link>
              </li>
              
          </ul>
            
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
