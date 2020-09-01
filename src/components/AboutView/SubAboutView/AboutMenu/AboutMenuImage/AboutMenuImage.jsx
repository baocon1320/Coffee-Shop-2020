import React from 'react';
import menu4 from '../../../../../resouces/images/AboutImages/menu-4.jpg';
import menu1 from '../../../../../resouces/images/AboutImages/menu-1.jpg';
import menu2 from '../../../../../resouces/images/AboutImages/menu-2.jpg';
import menu3 from '../../../../../resouces/images/AboutImages/menu-3.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function AboutMenuImage() {
  return (
    <Container>
      <Row>
        <Col style={{ marginTop: '2em' }}>
          {' '}
          <Image src={menu1} thumbnail alt="menu1" />
        </Col>
        <Col>
          {' '}
          <Image src={menu2} thumbnail alt="menu2" />
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: '2em' }}>
          {' '}
          <Image src={menu3} thumbnail alt="menu3" />
        </Col>
        <Col>
          {' '}
          <Image src={menu4} thumbnail alt="menu4" />
        </Col>
      </Row>
    </Container>
  );
}
