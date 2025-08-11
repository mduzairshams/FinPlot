import React from 'react';

function Hero() {
    return ( 
        <div className="container mt-5 mb-5 border-bottom" style={{paddingBottom:"5rem"}}>
            <div className="row text-center mt-4">
                <h3 style={{color:"#3c3c3c"}}>Zerodha Products</h3>
                <h4 className='mt-3 fs-5' style={{color:"#3c3c3c", fontWeight:"normal"}}>Sleek, modern, and intuitive trading platforms</h4>
                <p className='mt-4'>Check out our <a style={{textDecoration:"none"}} href="">investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;