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
              <Form.Control type="name" placeholder="Tên của bạn" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="subject" placeholder="Tiêu đề" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <FormControl
            style={{ height: '10em' }}
            as="textarea"
            aria-label="With textarea"
            placeholder="Nội dung"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Gửi
        </Button>{' '}
      </Container>
    </Form>
  );
}
