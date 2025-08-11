import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ">
      <div className="row mt-5" style={{paddingTop:"3rem", marginLeft:"3rem"}}>
        <div className="col-6" >
          <img src={imageURL} alt="" />
        </div>
        <div className="col-6" style={{paddingLeft:"10rem", paddingRight:"8rem", lineHeight:"2"}}>
          <h3>{productName}</h3><br />
          <p>{productDescription}</p>
          <a href={tryDemo} style={{ textDecoration: "none", paddingRight:"7rem", marginBottom:"3rem"}}>
            Try Demo <i class="fa-solid fa-arrow-right"></i>
          </a>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn More <i class="fa-solid fa-arrow-right"></i>
          </a> <br /><br />
          <a href={googlePlay} style={{ textDecoration: "none" }}>
            {" "}
            <img src="media/images/googlePlayBadge.svg" alt="" />{" "}
          </a> &nbsp;&nbsp;&nbsp;
          <a href={appStore} style={{ textDecoration: "none" }}>
            {" "}
            <img src="media/images/appstoreBadge.svg"/>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
