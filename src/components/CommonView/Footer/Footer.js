import React from 'react';
import AboutUs from './SubFooter/AboutUs';
import Hours from './SubFooter/Hours';
import Instagram from './SubFooter/Instagram';
import Contact from './SubFooter/Contact';
import './Footer.scss';
import { Container, Row, Col } from "react-bootstrap";
const footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md="6" lg="3" className="px-3">
            <AboutUs />
          </Col>
          <Col md="6" lg="3" className="px-3">
            <Hours />
          </Col>
          <Col md="6" lg="3" className="px-3">
            <Instagram />
          </Col>
          <Col md="6" lg="3" className="px-3">
            <Contact />
          </Col>
        </Row>
      </Container>
    </footer>
  );
  /*
  return (
    <div className="footer">
      <div
        className="footer-flex d-flex
        flex-row justify-content-center "
      >
        <AboutUs />
        <Blog />
        <Services />
        <Questions />
      </div>
      <div>
        <blockquote className="footer-blockquote">
          Copyright ©2020 All rights reserved | This template is made with by
          Colorlib
        </blockquote>
      </div>
    </div>
  );
  */
};

export default footer;
