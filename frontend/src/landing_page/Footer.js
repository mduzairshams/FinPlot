import React from 'react';

function Footer() {
    return (
      <footer style={{backgroundColor:"rgb(240, 240, 240)"}}>
        <div className="container border-top mt-5" >
          <div className="row mt-5">
            <div className="col-3">
            <img src="media/images/logo.svg" style={{width:"50%"}} alt="Logo" className= "mt-5 mb-3" />
            <p className='mb-6'>&copy; 2010-2024 Not Zerodha Broking Ltd. <br /> All rights reserved.</p>
            <i class="fa-brands fa-x-twitter" style={{paddingRight:"2rem", fontSize:"1.3rem"}}></i>
            <i class="fa-brands fa-facebook" style={{paddingRight:"2rem", fontSize:"1.3rem"}}></i>
            <i class="fa-brands fa-instagram" style={{paddingRight:"2rem", fontSize:"1.3rem"}}></i>
            <i class="fa-brands fa-linkedin-in" style={{paddingRight:"2rem", fontSize:"1.3rem"}}></i>
            <i class="fa-brands fa-telegram" style={{paddingRight:"2rem", fontSize:"1.3rem"}}></i>
          </div>
          <div className="col-3">
              <p style={{fontWeight: "450"}}>Company</p>
              <p>About</p>
              <p>Products</p> 
              <p>Pricing</p> 
              <p>Referral programme</p>
              <p>Careers</p> 
              <p>Zerodha.tech</p> 
              <p>Press and media</p> 
              <p>Press and media</p> 
          </div>
          <div className="col-3">
            <p style={{fontWeight: "450"}}>Support</p>
              <p>Contact</p>
              <p>Support portal</p> 
              <p>Z connect Blog</p> 
              <p>List of charges</p> 
              <p>Downloads & resources</p> 
          </div>
          <div className="col-3">
            <p style={{fontWeight: "450"}}>Account</p>
              <p>Open a account </p> 
              <p>Funds transfer </p> 
              <p>60 day challenge </p> 
              <p>Press and media</p> 
          </div>
          <div className='mt-5 mb-5' >
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 - SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </div>
          <div className='text-center'>
            <a href="#" className='p-3' style={{textDecoration: "none", color: "gray"}}>NSE</a>
            <a href="#" className='p-3' style={{textDecoration: "none", color: "gray"}}>BSE</a>
            <a href="#" className='p-3' style={{textDecoration: "none", color: "gray"}}>MCX</a>
            <a href="#" className='p-3' style={{textDecoration: "none", color: "gray"}}>Terms & condtions</a>
            <a href="#" className='p-3' style={{textDecoration: "none", color: "gray"}}>Policies & procedures</a>
            <a href="#" className='p-3' style={{textDecoration: "none", color: "gray"}}>Privacy policy</a>
            <a href="#" className='p-3' style={{textDecoration: "none", color: "gray"}}>Disclosure</a>
            <a href="#" className='p-3' style={{textDecoration: "none", color: "gray"}}>For investor's attention</a>
            <a href="#"className='p-3' style={{textDecoration: "none", color: "gray"}}>Investor charter</a>
          </div>

          </div>
          
        </div>
      </footer>
      );
}

export default Footer;