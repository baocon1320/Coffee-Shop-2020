import React, { Component } from 'react';
import ContactForm from './SubContactView/ContactForm.jsx';
import Contact from '../CommonView/Footer/SubFooter/Contact.js';
import Map from './SubContactView/Map.jsx';
import IntroComponent from '../CommonView/IntroComponent/IntroComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default class ContactView extends Component {
  render() {
    return (
      <div>
        <IntroComponent introDetail={this.props.introDetail} />
        <Container className="mt-5">
          <Row>
            <Col md={6}>
              <Contact />
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
}
