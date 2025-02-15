import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo"></div>
        <div className="link">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/project">Projects</NavLink>
          <NavLink to="/publication">Publication</NavLink>
          <NavLink to="/news">News</NavLink>
        </div>
        <Button navbtn="Donate Now" />
      </nav>
    </>
  );
};

export default Navbar;
