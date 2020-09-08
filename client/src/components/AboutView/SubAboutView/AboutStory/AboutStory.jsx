import React from 'react';
import about from '../../../../resouces/images/AboutImages/about.jpg';
import '../SubAbout.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
export default function AboutStory() {
  return (
    <Row>
      <Col lg={6}>
        <Image src={about} fluid />
      </Col>
      <Col lg={6} className="about-story-section ">
        <span className=" fadeIn">Discover</span>
        <h1 className=" fadeIn">Our Products</h1>
        <p className=" fadeIn">
          On her way she met a copy. The copy warned the Little Blind Text, that
          where it came from it would have been rewritten a thousand times and
          everything that was left from its origin would be the word "and" and
          the Little Blind Text should turn around and return to its own, safe
          country. But nothing the copy said could convince her and so it didn’t
          take long until a few insidious Copy Writers ambushed her, made her
          drunk with Longe and Parole and dragged her into their agency, where
          they abused her for their.
        </p>
      </Col>
    </Row>
  );
}
