import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.png"  alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="home.html#mydiv">Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Party hall</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;