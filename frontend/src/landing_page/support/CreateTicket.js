import React from 'react';

function CreateTicket() {
    return ( 
        <div className="container">
            <div className="row mt-5">
                <h2>To create a ticket, select a relevant topic</h2>
            </div>
            <div className="row mt-5">
                <div className="col mt-5">
                    <h5><i class="fa-solid fa-plus"></i> Account Opening</h5><br />
                    <p><a href="" style={{textDecoration:"none"}}>Onlice Account Opening</a></p> 
                    <p><a href="" style={{textDecoration:"none"}}>Open demat account</a></p>
                    <p><a href="" style={{textDecoration:"none"}}>Minor demat account</a></p>
                    <p><a href="" style={{textDecoration:"none"}}>NRI demat account</a></p>
                    <p><a href="" style={{textDecoration:"none"}}>Commodity</a></p>
                    <p><a href="" style={{textDecoration:"none"}}>Dematerialisation</a></p>
                    <p><a href="" style={{textDecoration:"none"}}>Fund transfer</a></p>
                </div>
                <div className="col mt-5">

                    <h5><i class="fa-solid fa-user"></i> Your FinPlot Account</h5> <br />
                    <p><a href="" style={{textDecoration:"none"}}>MTF</a></p>
                    <p><a href="" style={{textDecoration:"none"}}>Referral program</a></p>
                    <p><a href="" style={{textDecoration:"none"}}>Support portal</a></p>
                    <p><a href="" style={{textDecoration:"none"}}>Company</a></p>
                    <p><a href="" style={{textDecoration:"none"}}>Philosophy</a></p>

                </div>
                <div className="col mt-5">
                    <h5><i class="fa-solid fa-chart-simple"></i> Your FinPlot Account </h5> <br />
                    <p><a href="" style={{textDecoration:"none"}}>Market holidays</a></p>
                    <p><a href="" style={{textDecoration:"none"}}>Calculators</a></p>
                    <p><a href="" style={{textDecoration:"none"}}>Brokerage charges</a></p>
                    <p><a href="" style={{textDecoration:"none"}}>Economic calendar</a></p>
                    <p><a href="" style={{textDecoration:"none"}}>Upcoming IPOs</a></p>
                    


                </div>
            </div>
        </div>
     );
}

export default CreateTicket;