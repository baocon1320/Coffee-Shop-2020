import React from 'react';
import ContactForm from './SubContactView/ContactForm';
import Contact from '../CommonView/Footer/SubFooter/Contact';
import Map from './SubContactView/Map';
import IntroComponent from '../CommonView/IntroComponent/IntroComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactView(props) {
  const infoData = props.infoData;
  const introDetail = {
    src: infoData.info.contactImage,
    text: '',
    alt: 'Goc Cafe Contact'
  };
  return (
    <div>
      <IntroComponent introDetail={introDetail} />
      <Container className="mt-5 p-5">
        <Row>
          <Col md={6}>
            <Contact info={infoData.info} />
          </Col>
          <Col md={6} pt-3>
            <ContactForm />
          </Col>
        </Row>
      </Container>
      <Map className="mb-5" />
    </div>
  );
}

export default ContactView;
