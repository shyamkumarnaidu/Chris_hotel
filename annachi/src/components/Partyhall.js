import React from "react";

const Partyhall = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="/img/party.jpg" alt="Party" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>The Offerd  Palce</h3>
            <h1>BEST PALCE TO CELEBRATE YOUR SPECIAL MOMENTS</h1>
            <p>
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynaus, quise
              sequitur mutationem consuetudium lectorum.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partyhall;