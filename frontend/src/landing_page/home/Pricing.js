import React from 'react';

function Pricing() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-4">
                    <h2 className="mb-4">Unbeatable pricing</h2>
                    <p className="mb-4">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="/" style={{textDecoration:"None" , fontWeight: "500"}}>See pricing  <i class="fa-solid fa-arrow-right"></i></a>

                </div>

                <div className="col-2"></div>

                <div className="col-6 text-center">
                <div className="row">
                    <div className="col-6 p-4" style={{borderColor:"lightgray", border:"1px solid"}}>
                        <h1>&#8377;0</h1>
                        <p >Free equity delivery and <br /> direct mutual funds</p>
                    </div>
                    <div className="col-6 p-4 text-center" style={{borderColor:"lightgray", border:"1px solid"}}>
                        <h1>&#8377;20</h1>
                        <p>Intraday and F&O </p>
                    </div>
                </div>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/>
        </div>
     );
}

export default Pricing;