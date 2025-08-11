import React from 'react';

function RightSection({ImageRURL, prodName, prodDescription, learnMore}) {
    return ( 
        <div className="container mt-5">
            <div className="row mt-5" style={{paddingTop:"3rem", marginLeft:"3rem"}}>
                <div className="col-6"  style={{paddingLeft:"10rem", paddingRight:"8rem", lineHeight:"2"}}>
                <h3>{prodName}</h3>
                <p>{prodDescription}</p>
                <a href={learnMore} style={{ textDecoration: "none"}}>Learn More</a>

                </div>

                <div className="col-6">
                    <img src={ImageRURL} alt="" />

                </div>
            </div>
        </div>
     );
}

export default RightSection;