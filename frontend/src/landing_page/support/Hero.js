import React from "react";

function Hero() {
  return (
    <div className="cover" style={{ backgroundColor: "#387ed1" }}>
      <div className="container">
        <div className="row ">
          <div className="col-1"></div>

          <div className="col-5 mt-5 mb-5">
            <h5 style={{ color: "white", fontWeight: "400" }}>
              Support Portal
            </h5>
            <br />
            <br />
            <br />
            <h4
              style={{ color: "white", fontWeight: "400", lineHeight: "1.5" }}
            >
              Search for an answer or browse help topics <br /> to create a
              ticket
            </h4>
            <div
              className="Eg rounded text-center"
              style={{ backgroundColor: "white", padding: "10px" }}
            >
              <p style={{ paddingTop: "15px" }}>
                Eg: how do I activate F&O, why is my order getting rejected...
              </p>
            </div>
            <a href="" style={{ color: "white", textDecoration: "underline" , paddingRight:"1rem" }}>
              Track account opening
            </a>
            <a href="" style={{ color: "white", textDecoration: "underline", paddingRight:"1rem" }}>
              Track segment activation
            </a>
            <a href="" style={{ color: "white", textDecoration: "underline", paddingRight:"1rem" }}>
              Intraday margins
            </a>
            <a href="" style={{ color: "white", textDecoration: "underline", paddingRight:"1rem" }}>
              Kite user manual
            </a>
          </div>

          <div className="col-5 mt-5 mb-5" style={{ marginLeft: "5rem" }}>
            <div className="d-flex justify-content-end">
              <button
                style={{
                  backgroundColor: "#fdfdfdff",
                  color: "black",
                  border: "none",
                  borderRadius: "14px",
                  padding: "15px",
                }}
              >
                My Tickets
              </button>
            </div>
            <h5 style={{ color: "white", marginTop: "3rem", padding: "8px" }}>
              Featured
            </h5>
            <ol style={{ color: "white" }}>
              <li>
                <a
                  href="#"
                  style={{ color: "white", textDecoration: "underline" }}
                >
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a href style={{ color: "white", textDecoration: "underline" }}>
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>

          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
