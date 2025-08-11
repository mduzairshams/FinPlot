import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className="row p-5 text-center">
                <img src="media/images/homeHero.png" alt="Hero_Image" className='mb-5' />
            <h1 className='mt-5 pb-2'>Invest in everything</h1>
            <p className="fs-4 mb-5">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='p-2 fs-4  btn btn-primary mb-5' style={{width:"18%" , margin: "0 auto", fontWeight:"500" }}>Sign up for free</button>
            </div>
            <br/><br/>
        </div>
     );
}

export default Hero;