import React from "react";

const Clients = () => {
  return (
    <div className="clients">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="client">
              <h1>FIND US </h1>
              <p>@ Santhosh Towers, EPIP, ITPL Main Road, White Field</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>CONTACT US</h1>
              <p> +91  80499 12077 <br></br>+91  98422 62077 <br></br>+91  95131 62077</p>
            </div>
            </div>
            <hr></hr>
          <div className="col-3">
            <div className="client">
              <img src="/img/logo.png"/>
              <p>© 2022 Hotel Annachi - Veg & Non Veg Restaurant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;