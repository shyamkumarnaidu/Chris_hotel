import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO ANNACHI RESTAURANT</h1>
            <h6> " Eat Real Food & Deliciious Food Enjoy "</h6>
            <p>
            We are located in thudiyalur, coimbatore, Our ethos has always been to provide
             consistently excellent food, The dining area seats up to 100 guests for lunch or dinner.
              We can cater for private or corporate functions of up to 100 guests in our partyhall.
               We also offer set menus for groups of more than 12 guests. we are prepares deliciois
             & Special food we want you to enjoy a memorable experience at our Restaurant..
            </p>
            <div className="about__btn">
              <a href="home.html" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/about1.jpg" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;