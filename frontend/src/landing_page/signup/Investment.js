import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

function Investment() {
  const titleRef = useScrollAnimation();
  const leftColumnRef = useScrollAnimation();
  const rightColumnRef = useScrollAnimation();
  const buttonRef = useScrollAnimation();

  return (
    <div className="container py-5">
      <h3 
        ref={titleRef}
        className="text-center scroll-animate-up" 
        style={{ 
          color: "#3c3c3c",
          marginBottom: '3rem'
        }}
      >
        Investment options with FinPlot demat account
      </h3>

      <div className="row justify-content-center mt-5 gx-5 gy-5">
        {/* Left column: Stocks, IPO */}
        <div 
          ref={leftColumnRef}
          className="col-12 col-md-6 scroll-animate-left scroll-animate-delay-1"
        >
          <div className="d-flex align-items-start gap-4 mb-5" style={{ 
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            padding: '1rem',
            borderRadius: '12px'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
            e.target.style.backgroundColor = 'rgba(56, 126, 209, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
            e.target.style.backgroundColor = 'transparent';
          }}>
                          <img
                src="media/images/stocks-acop.svg"
                alt="Stocks"
                style={{ 
                  width: 72, 
                  height: 72,
                  transition: 'all 0.3s ease'
                }}
              />
              <div>
              <h3 className="h4 mb-2" style={{ color: "#3c3c3c" }}>
                Stocks
              </h3>
              <p className="mb-0 text-muted">
                Invest in all exchange-listed securities
              </p>
            </div>
          </div>

          <div className="d-flex align-items-start gap-4">
            <img
              src="media/images/ipo-acop.svg"
              alt="IPO"
              style={{ width: 72, height: 72 }}
            />
            <div>
              <h3 className="h4 mb-2" style={{ color: "#3c3c3c" }}>
                IPO
              </h3>
              <p className="mb-0 text-muted">
                Apply to the latest IPOs instantly via UPI
              </p>
            </div>
          </div>
        </div>

        {/* Right column: Mutual funds, Futures & options */}
        <div 
          ref={rightColumnRef}
          className="col-12 col-md-6 scroll-animate-right scroll-animate-delay-2"
        >
          <div className="d-flex align-items-start gap-4 mb-5">
            <img
              src="media/images/mf-acop.svg"
              alt="Mutual funds"
              style={{ width: 72, height: 72 }}
            />
            <div>
              <h3 className="h4 mb-2" style={{ color: "#3c3c3c" }}>
                Mutual funds
              </h3>
              <p className="mb-0 text-muted">
                Invest in commission-free direct mutual funds
              </p>
            </div>
          </div>

          <div className="d-flex align-items-start gap-4">
            <img
              src="media/images/fo-acop.svg"
              alt="Futures & options"
              style={{ width: 72, height: 72 }}
            />
            <div>
              <h3 className="h4 mb-2" style={{ color: "#3c3c3c" }}>
                Futures & options
              </h3>
              <p className="mb-0 text-muted">
                Hedge and mitigate market risk through simplified F&O trading
              </p>
            </div>
          </div>
        </div>
      </div>

      <div 
        ref={buttonRef}
        className="text-center mt-5 scroll-animate scroll-animate-delay-3"
      >
        <button
          className="btn btn-primary btn-lg px-4"
          style={{ 
            fontWeight: 500,
            background: 'linear-gradient(135deg, #387ED1, #2962ff)',
            border: 'none',
            borderRadius: '12px',
            padding: '12px 32px',
            boxShadow: '0 6px 20px rgba(56, 126, 209, 0.3)',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            transform: 'perspective(1000px) rotateX(0deg)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px) scale(1.05) perspective(1000px) rotateX(5deg)';
            e.target.style.boxShadow = '0 12px 30px rgba(56, 126, 209, 0.4)';
            e.target.style.filter = 'brightness(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1) perspective(1000px) rotateX(0deg)';
            e.target.style.boxShadow = '0 6px 20px rgba(56, 126, 209, 0.3)';
            e.target.style.filter = 'brightness(1)';
          }}
        >
          Explore Investments
        </button>
      </div>
    </div>
  );
}

export default Investment;
