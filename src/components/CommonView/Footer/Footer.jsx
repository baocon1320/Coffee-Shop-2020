import React from 'react';
import AboutUs from './SubFooter/AboutUs.jsx';
import Blog from './SubFooter/Blog.jsx';
import Services from './SubFooter/Services.jsx';
import Questions from './SubFooter/Questions.jsx';
import './Footer.scss';
const footer = () => {
  return (
    <div className="footer pt-5 text-white m-auto">
      <div
        className="footer-flex d-flex
        flex-row justify-content-center flex-wrap flex-sm-column"
      >
        <AboutUs />
        <Blog />
        <Services />
        <Questions />
      </div>
      <div>
        <blockquote className="text-center h5 p-5">
          Copyright ©2020 All rights reserved | This template is made with by
          Colorlib
        </blockquote>
      </div>
    </div>
  );
};

export default footer;
