import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ContactForm() {
  return (
    <Form>
      <Container>
        <Row>
          <Col>
            <Form.Group controlId="formBasicName">
              <Form.Control type="name" placeholder="YourName" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="subject" placeholder="Subject" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <FormControl
            style={{ height: '10em' }}
            as="textarea"
            aria-label="With textarea"
            placeholder="Message"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>{' '}
      </Container>
    </Form>
  );
}
