import React from 'react';

function Awards() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row ">
                <div className="col-6   ">
                    <img src="media/images/largestBroker.svg" className="" alt="" />
                </div>
                <div className="col-6 p-2">
                    <h1>Largest stock broker in India</h1>
                    <p style={{width: "80%"}}>2+ million Zerodha clients  contribute over a 15% of retail order volumes in India daily by trading  and investing in: </p>
                    <div className="row mt-5">
                            <div className="col-6">
                        <ul>
                            <li className='pb-2'>Futures and Opinions</li>
                            <li className='pb-2'>Commodity derivates</li>
                            <li className='pb-2'>Currency derivates</li>
                        </ul>
                            </div>
                        <div className="col-6">
                        <ul>
                            <li className='pb-2'>Stock and IPOs</li>
                            <li className='pb-2'>Direct mutual funds</li>
                            <li className='pb-2'>Bonds and Gov. Securites</li>
                        </ul>
                            </div>
                    </div>
                    <a href="/"> <img src="media/images/pressLogos.png" className="mt-2" style={{width:"90%"}} alt="" />  </a> 
                </div>
            </div>
            <br/>
        </div>
     );
}

export default Awards;