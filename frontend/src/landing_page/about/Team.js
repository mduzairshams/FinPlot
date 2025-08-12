import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

function Team() {
  const titleRef = useScrollAnimation();
  const founderRef = useScrollAnimation();
  const teamRef = useScrollAnimation();

  return (
    <div className="container mt-5">
      <div className="row  p-5 mt-5 mb-5">
        <h3 
          ref={titleRef}
          style={{ 
            color: "#3c3c3c",
            fontSize: '2.5rem',
            fontWeight: '600'
          }} 
          className="mb-5 text-center scroll-animate-up"
        >
          People
        </h3>
        <div className="row mt-5 mb-5">
          <div className="col-1"></div>
          <div 
            ref={founderRef}
            className="col-5 text-center scroll-animate-left scroll-animate-delay-1"
          >
            <img
              src="media/images/nithinKamath.jpg"
              style={{ 
                width: "295px", 
                height: "295px", 
                borderRadius: "50%",
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              alt="NithinKamath"
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <p className="fs-3 mt-3" style={{ color: "#3c3c3c" }}>
              Nithin Kamath
            </p>
            <p style={{ color: "#6c6c6c" }}>Founder, CEO</p>
          </div>
          <div 
            ref={teamRef}
            className="col-5 mb-5 scroll-animate-right scroll-animate-delay-2"
          >
            <p style={{ color: "#3c3c3c" }}>
              Nithin bootstrapped and founded FinPlot in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
                              FinPlot has changed the landscape of the Indian broking industry.{" "}
              <br />
              <br />
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC). <br />{" "}
              <br />
              Playing basketball is his zen.
            </p>
            <Link to="/" style={{ 
              textDecoration: "none", 
              color: "#387ED1",
              fontWeight: '500',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#2962ff';
              e.target.style.textDecoration = 'underline';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#387ED1';
              e.target.style.textDecoration = 'none';
            }}>
              Connect on Homepage / TradingQnA / Twitter
            </Link>
          </div>

          <div
            className="row"
            style={{ marginLeft: "1.5rem", marginTop: "9rem" }}
          >
            <div className="col text-center">
              <img
                src="https://zerodha.com/static/images/Nikhil.jpg"
                style={{ width: "237px", height: "237px", borderRadius: "50%" }}
                alt="Nikhil Kamath"
              />
              <p className="fs-3 mt-3" style={{ color: "#3c3c3c" }}>
                Nikhil Kamath
              </p>
              <p style={{ color: "#6c6c6c" }}>Co-founder & CFO</p>
            </div>
            <div className="col text-center">
              <img
                src="https://zerodha.com/static/images/Kailash.jpg"
                style={{ width: "237px", height: "237px", borderRadius: "50%" }}
                alt="NithinKamath"
              />
              <p className="fs-3 mt-3" style={{ color: "#3c3c3c" }}>
                Dr. Kailash Nadh
              </p>
              <p style={{ color: "#6c6c6c" }}>CTO</p>
            </div>
            <div className="col text-center">
              <img
                src="https://zerodha.com/static/images/Venu.jpg"
                style={{ width: "237px", height: "237px", borderRadius: "50%" }}
                alt="NithinKamath"
              />
              <p className="fs-3 mt-3" style={{ color: "#3c3c3c" }}>
                Venu Madhav
              </p>
              <p style={{ color: "#6c6c6c" }}>COO</p>
            </div>
          </div>

          <div
            className="row"
            style={{ marginLeft: "1.5rem", marginTop: "6rem" }}
          >
            <div className="col text-center">
              <img
                src="https://zerodha.com/static/images/Hanan.jpg"
                style={{ width: "237px", height: "237px", borderRadius: "50%" }}
                alt="Nikhil Kamath"
              />
              <p className="fs-3 mt-3" style={{ color: "#3c3c3c" }}>
                Hanan Delvi
              </p>
              <p style={{ color: "#6c6c6c" }}>CCO</p>
            </div>
            <div className="col text-center">
              <img
                src="https://zerodha.com/static/images/Seema.jpg"
                style={{ width: "237px", height: "237px", borderRadius: "50%" }}
                alt="NithinKamath"
              />
              <p className="fs-3 mt-3" style={{ color: "#3c3c3c" }}>
                Seema Patil
              </p>
              <p style={{ color: "#6c6c6c" }}>Director</p>
            </div>
            <div className="col text-center">
              <img
                src="https://zerodha.com/static/images/karthik.jpg"
                style={{ width: "237px", height: "237px", borderRadius: "50%" }}
                alt="NithinKamath"
              />
              <p className="fs-3 mt-3" style={{ color: "#3c3c3c" }}>
                Karthik Rangappa
              </p>
              <p style={{ color: "#6c6c6c" }}>Chief of Education</p>
              <p>Bio</p>
              
            </div>
            


            <div
            className="row"
            style={{ marginLeft: "2.2rem", marginTop: "6rem" }}
          >
            <div className="col">
              <img
                src="https://zerodha.com/static/images/Austin.jpg"
                style={{ width: "237px", height: "237px", borderRadius: "50%" }}
                alt="Nikhil Kamath"
              />
              <p className="fs-3 mt-3 " style={{ color: "#3c3c3c", marginLeft:"2.2rem" }}>
                Austin Prakesh
              </p>
              <p style={{ color: "#6c6c6c", marginLeft:"6rem"  }}>Director Strategy</p>
            </div>

              
            
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Team;
