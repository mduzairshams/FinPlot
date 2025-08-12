import React from 'react';
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

function Hero() {
    const titleRef = useScrollAnimation();
    const leftCardRef = useScrollAnimation();
    const centerCardRef = useScrollAnimation();
    const rightCardRef = useScrollAnimation();

    return (
        <div className="container mt-5" style={{
          marginBottom:"7rem"
        }}>
          <div className="row text-center mt-5 mb-5" >
            <h3 
              ref={titleRef}
              className='mb-3 scroll-animate-up' 
              style={{
                marginTop:"3rem", 
                color:"#3c3c3c",
                fontSize: '2.5rem',
                fontWeight: '600'
              }}
            >
              Charges
            </h3>
            <p 
              ref={titleRef}
              className='text-muted scroll-animate-up scroll-animate-delay-1' 
              style={{
                fontSize:"1.3rem"
              }}
            >
              List of all charges and taxes
            </p>
          </div>
                      <div className="row">
             <div 
               ref={leftCardRef}
               className="col text-center scroll-animate-left scroll-animate-delay-1"
             >
                <img src="media/images/pricing0.svg" style={{
                  width:"60%", 
                  marginLeft:"5rem", 
                  paddingRight:"2rem",
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }} 
                alt="" 
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
                />
                <h3 style={{ 
                  color:"#3c3c3c", 
                  marginBottom:"1.5rem",
                  fontSize: '1.5rem',
                  fontWeight: '600'
                }}>Free equity delivery</h3>
                <p style={{ 
                  color:"#6c6c6c",
                  fontSize: '1.1rem',
                  lineHeight: '1.6'
                }}>All equity delivery investments (NSE, BSE), <br />are absolutely free — ₹ 0 brokerage.</p>
            </div>
                         <div 
               ref={centerCardRef}
               className="col text-center scroll-animate scroll-animate-delay-2"
             >
               <img src="https://zerodha.com/static/images/other-trades.svg" style={{
                width:"60%", 
                marginLeft:"5rem", 
                paddingRight:"2rem",
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }} 
              alt="" 
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
              />
              <h3 style={{ 
                color:"#3c3c3c", 
                marginBottom:"1.5rem",
                fontSize: '1.5rem',
                fontWeight: '600'
              }}>Intraday and F&O trades</h3>
              <p style={{ 
                color:"#6c6c6c",
                fontSize: '1.1rem',
                lineHeight: '1.6'
              }}>Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order on intraday trades across <br /> equity, currency, and commodity trades. Flat <br /> ₹20 on all option trades.</p>
            </div>
                         <div 
               ref={rightCardRef}
               className="col text-center scroll-animate-right scroll-animate-delay-3"
             >
               <img src="https://zerodha.com/static/images/pricing-eq.svg"  style={{
                width:"60%", 
                marginLeft:"5rem", 
                paddingRight:"2rem",
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }} 
              alt="" 
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
              />
              <h3 style={{ 
                color:"#3c3c3c", 
                marginBottom:"1.5rem",
                fontSize: '1.5rem',
                fontWeight: '600'
              }}>Free direct MF</h3>
              <p style={{ 
                color:"#6c6c6c",
                fontSize: '1.1rem',
                lineHeight: '1.6'
              }}>All direct mutual fund investments are <br />absolutely free — ₹ 0 commissions & DP <br />charges.</p>
            </div>
          </div>
        </div>
      );
}

export default Hero;