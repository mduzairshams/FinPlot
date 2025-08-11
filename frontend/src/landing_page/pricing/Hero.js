import React from 'react';

function Hero() {
    return (
        <div className="container mt-5" style={{marginBottom:"7rem"}}>
          <div className="row text-center mt-5 mb-5" >
            <h3 className='mb-3' style={{marginTop:"3rem", color:"#3c3c3c"}}>Charges</h3>
            <p className='text-muted' style={{fontSize:"1.3rem"}}>List of all charges and taxes</p>
          </div>
          <div className="row">
            <div className="col text-center">
                <img src="media/images/pricing0.svg" style={{width:"60%", marginLeft:"5rem", paddingRight:"2rem"}} alt="" />
                <h3 style={{ color:"#3c3c3c", marginBottom:"1.5rem"}}>Free equity delivery</h3>
                <p style={{ color:"#6c6c6c"}}>All equity delivery investments (NSE, BSE), <br />are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col text-center">
              <img src="https://zerodha.com/static/images/other-trades.svg" style={{width:"60%", marginLeft:"5rem", paddingRight:"2rem"}} alt="" />
              <h3 style={{ color:"#3c3c3c", marginBottom:"1.5rem"}}>Intraday and F&O trades</h3>
              <p style={{ color:"#6c6c6c"}}>Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order on intraday trades across <br /> equity, currency, and commodity trades. Flat <br /> ₹20 on all option trades.</p>
            </div>
            <div className="col text-center">
              <img src="https://zerodha.com/static/images/pricing-eq.svg"  style={{width:"60%", marginLeft:"5rem", paddingRight:"2rem"}} alt="" />
              <h3 style={{ color:"#3c3c3c", marginBottom:"1.5rem"}}>Free direct MF</h3>
              <p style={{ color:"#6c6c6c"}}>All direct mutual fund investments are <br />absolutely free — ₹ 0 commissions & DP <br />charges.</p>
            </div>
          </div>
        </div>
      );
}

export default Hero;