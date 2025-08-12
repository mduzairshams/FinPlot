import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

function Hero() {
  const titleRef = useScrollAnimation();
  const leftContentRef = useScrollAnimation();
  const rightContentRef = useScrollAnimation();

  return (
    <div className="container">
      <div className="row text-center p-5 mt-5 mb-5 border-bottom">
        <h3 
          ref={titleRef}
          className="mt-5 mb-5 scroll-animate-up"
          style={{
            color:"#3c3c3c",
            fontSize: '2.2rem',
            fontWeight: '600',
            lineHeight: '1.4'
          }}
        >
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h3>
      </div>
      <div className="row ml-3">
        <div 
          ref={leftContentRef}
          className="col-6 scroll-animate-left scroll-animate-delay-1"
        >
        <p style={{
          color:"#3c3c3c",
          fontSize: '1.1rem',
          lineHeight: '1.7',
          marginBottom: '1.5rem'
        }}>
            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company FinPlot, a combination of Finance and "Plot", representing our vision to plot your financial success.
        </p>
        <p style={{color:"#3c3c3c"}}>
            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
        </p>
        <p style={{color:"#3c3c3c"}}>
            Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
        </p>
        </div>
        <div 
          ref={rightContentRef}
          className="col-6 scroll-animate-right scroll-animate-delay-2"
        >
        <p className="fw-6" style={{
          color:"#3c3c3c",
          fontSize: '1.1rem',
          lineHeight: '1.7',
          marginBottom: '1.5rem',
          fontWeight: '600'
        }}>
            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
        </p>
        <p  style={{color:"#3c3c3c"}}>
            Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
        </p>
        <p style={{color:"#3c3c3c"}}>
            And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.
        </p>
      </div>

      </div>
      
    </div>
  );
}

export default Hero;
