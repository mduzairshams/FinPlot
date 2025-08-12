import React from "react";

function Investment() {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <br /><br /><br />
        <h3 className="text-center" style={{color:"#3c3c3c"}}>Investment options with Zerodha demat account</h3>
        <br /><br />  

        <div className="col-6 text-center">
          <div className="row">

            <div className="col-3">
              <img src="media/images/stocks-acop.svg" alt="Stocks" />
            </div>

            <div className="col-3">
                <h3 style={{color:"#3c3c3c"}}>Stocks</h3>
                <h4 className='mt-3 fs-5 text-muted' style={{color:"#3c3c3c", fontWeight:"normal"}}>Invest in all exchange-listed securities</h4>
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <img src="media/images/mf-acop.svg" alt="Stocks" />
            </div>

            <div className="col-3">
                <h3 style={{color:"#3c3c3c"}}>IPO</h3>
                <h4 className='mt-3 fs-5 text-muted' style={{color:"#3c3c3c", fontWeight:"normal"}}>Apply to the latest IPOs instantly via UPI</h4>
            </div>
          </div>
        </div>


        <div className="col-6 text-center">


          <div className="row">
            <div className="col-3 text-center">
              <img src="media/images/ipo-acop.svg" alt="Stocks" />
            </div>

            <div className="col-3 ">
                <h3 style={{color:"#3c3c3c"}}>Mutual funds</h3>
                <h4 className='mt-3 fs-5 text-muted' style={{color:"#3c3c3c", fontWeight:"normal"}}>Invest in commission-free direct mutual funds</h4>
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <img src="media/images/fo-acop.svg" alt="Stocks" />
            </div>

            <div className="col-3">
                <h3 style={{color:"#3c3c3c"}}>Futures & options</h3>
                <h4 className='mt-3 fs-5 text-muted' style={{color:"#3c3c3c", fontWeight:"normal"}}>Hedge and mitigate market risk through simplified F&O trading</h4>
            </div>

          </div>
        </div>
      </div>
      <button className=' p-2 fs-4  btn btn-primary mb-5' style={{ margin:"auto", width:"15%" , margin: "0 auto", fontWeight:"500" }}>Explore Investments </button>
    </div>
  );
}

export default Investment;
