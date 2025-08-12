import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row mt-5 text-center">
        <h3
          className="mb-4"
          style={{ color: "#3c3c3c", fontWeight: "semibold" }}
        >
          The FinPlot Universe
        </h3>
        <p className="mb-5" style={{ color: "#3c3c3c" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="row mt-5" style={{ marginLeft: "2rem" }}>
          <div className="col text-center">
            <img
              style={{ width: "55%", marginBottom: "1rem" }}
                          src="media/images/zerodhaFundhouse.png"
            alt="FinPlotFundhouse"
            />
            <p style={{ color: "#6c6c6c", width: "80%", marginLeft: "2rem" }}>
              Our asset management venture <br /> that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>

          <div className="col text-center">
            <img
              style={{ width: "55%", marginBottom: "1rem" }}
              src="media/images/sensibullLogo.svg"
              alt="FinPlotFundhouse"
            />
            <p style={{ color: "#6c6c6c", width: "80%", marginLeft: "2rem" }}>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>

          <div className="col text-center">
            <img
              style={{ width: "40%", marginBottom: "1rem" }}
              src="https://zerodha.com/static/images/partners/tijori.svg"
              alt="FinPlotFundhouse"
            />
            <p style={{ color: "#6c6c6c", width: "80%", marginLeft: "2rem" }}>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>

        <div className="row mt-5 mb-5" style={{ marginLeft: "2rem" }}>
          <div className="col text-center">
            <img
              style={{ width: "45%", marginBottom: "1rem" }}
              src="media/images/streakLogo.png"
              alt="FinPlotFundhouse"
            />
            <p style={{ color: "#6c6c6c", width: "80%", marginLeft: "2rem" }}>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>

          <div className="col text-center">
            <img
              style={{ width: "55%", marginBottom: "1rem" }}
              src="media/images/smallcaseLogo.png"
              alt="FinPlotFundhouse"
            />
            <p style={{ color: "#6c6c6c", width: "80%", marginLeft: "2rem" }}>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>

          <div className="col text-center">
            <img
              style={{ width: "40%", marginBottom: "1rem" }}
              src="media/images/dittoLogo.png"
              alt="FinPlotFundhouse"
            />
            <p style={{ color: "#6c6c6c", width: "80%", marginLeft: "2rem" }}>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
        <button
          className="p-2 fs-4  btn btn-primary mt-5 mb-5"
          style={{ width: "15%", margin: "0 auto", fontWeight: "500" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
