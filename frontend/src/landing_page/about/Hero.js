import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center p-5 mt-5 mb-5 border-bottom">
        <h3 className="mt-5 mb-5" style={{color:"#3c3c3c"}}>
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h3>
      </div>
      <div className="row ml-3 " >
        <div className="col-6" >
        <p style={{color:"#3c3c3c"}}>
            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
        </p>
        <p style={{color:"#3c3c3c"}}>
            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
        </p>
        <p style={{color:"#3c3c3c"}}>
            Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
        </p>

      </div>
      <div className="col-6">
        <p className="fw-6" style={{color:"#3c3c3c"}}>
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
