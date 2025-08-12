import React from 'react';

function Stats() {
    return ( 
        <div className="container">
        <div className="row p-5">
            <div className="col-6">
                <h2 className='mb-5's style={{color:"gray"}}>Trust with confidence</h2>
                <h3 style={{color:"gray"}}>Customer-first always</h3>
                <p className='mb-4' style={{width: "80%", color:"lightgray"}}>That's why 1.6+ crore customers trust FinPlot with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                <h3 style={{color:"gray"}}>No spam or gimmicks</h3>
                <p className='mb-4' style={{width: "80%", color:"lightgray"}}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                <h3 style={{color:"gray"}}>The FinPlot universe</h3>
                <p className='mb-4' style={{width: "80%", color:"lightgray"}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                
                <h3 style={{color:"gray"}}>Do better with money</h3>
                <p className='mb-4' style={{width: "80%", color:"lightgray"}}>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className="col-6">
                <img src="media/images/ecosystem.png" style={{width: "100%"}} alt="EcosystemOfFinPlot" />
                <div className="link text-center">
                <a href="/" style={{textDecoration:"None" , fontWeight: "500"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/" style={{textDecoration:"None" , fontWeight: "500"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            </div>
            
        </div>
        <br/><br/><br/><br/>
        </div>
     );
}

export default Stats
