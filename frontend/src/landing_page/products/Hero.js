import React from 'react';
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

function Hero() {
    const titleRef = useScrollAnimation();
    const subtitleRef = useScrollAnimation();
    const linkRef = useScrollAnimation();

    return ( 
        <div className="container mt-5 mb-5 border-bottom" style={{
          paddingBottom:"5rem"
        }}>
            <div className="row text-center mt-4">
                <h3 
                  ref={titleRef}
                  style={{
                    color:"#3c3c3c",
                    fontSize: '2.5rem',
                    fontWeight: '600'
                  }}
                  className="scroll-animate-up"
                >
                  FinPlot Products
                </h3>
                <h4 
                  ref={subtitleRef}
                  className='mt-3 fs-5 scroll-animate-up scroll-animate-delay-1' 
                  style={{
                    color:"#3c3c3c", 
                    fontWeight:"normal",
                    fontSize: '1.3rem'
                  }}
                >
                  Sleek, modern, and intuitive trading platforms
                </h4>
                <p 
                  ref={linkRef}
                  className='mt-4 scroll-animate-up scroll-animate-delay-2'
                >
                  Check out our <a style={{
                    textDecoration:"none",
                    color: '#387ED1',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }} 
                  href=""
                  onMouseEnter={(e) => {
                    e.target.style.color = '#2962ff';
                    e.target.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#387ED1';
                    e.target.style.textDecoration = 'none';
                  }}
                  >investment offerings <i class="fa-solid fa-arrow-right"></i></a>
                </p>
            </div>
        </div>
     );
}

export default Hero;