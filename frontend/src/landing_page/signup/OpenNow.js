import React from 'react';


function OpenNow() {
    return ( 
        <div className="container mb-5 mt-5">
            <div className="row mt-5 mb-5 text-center">
                <div className="col-6 text-center">
                    <img style={{marginLeft: "3rem"}} src="media/images/account_open.svg" alt="App_overview" />

                </div>

                <div className="col-6">
                    <h3 style={{color:"#3c3c3c"}}>Signup now</h3>
                    <h5 style={{color:"#878787ff"}}>Or track your existing application</h5>
                    <div className="col-2">
                        <img src="media/images/india-flag.svg" alt="Indian_Flag" />
                        +91

                    </div>
                    <div className="col-4 text-center">
                        <input type="number" placeholder='Enter your mobile number' style={{width:"20px"}} />

                    </div>

                </div>
            </div>
        </div>

        
     );
}

export default OpenNow;