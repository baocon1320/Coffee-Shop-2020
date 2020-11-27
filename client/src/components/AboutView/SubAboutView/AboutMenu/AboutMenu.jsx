import React from 'react';
import '.././SubAbout.scss';
import AboutMenuSection from './AboutMenuSection/AboutMenuSection';
import AboutMenuImages from './AboutMenuImage/AboutMenuImage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function AboutMenu() {
  return (
    <Container className="p-5">
      <Row>
        <Col className="mt-5">
          <AboutMenuSection />
        </Col>
        <Col>
          <AboutMenuImages />
        </Col>
      </Row>
    </Container>
  );
}
