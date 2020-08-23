import React from "react";
import AboutUs from "./SubFooter/AboutUs";
import Blog from "./SubFooter/Blog";
import Services from "./SubFooter/Services";
import Questions from "./SubFooter/Questions";
import "./Footer.scss";
const footer = () => {
  return (
    <div className="footer">
      <div
        className="
      footer-flex"
      >
        <AboutUs />
        <Blog />
        <Services />
        <Questions />
      </div>
      <div>
        <blockquote>
          Copyright ©2020 All rights reserved | This template is made with by
          Colorlib
        </blockquote>
      </div>
    </div>
  );
};

export default footer;
