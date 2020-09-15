import React from 'react';
import { Carousel, Row, Col, Button } from 'react-bootstrap';
//import bgImages from '../../../resouces/images/backgroundImages/bgImages';
import './style.css';
//import img1 from '../../../resouces/images/backgroundImages/bg_1.jpg'

function SliderImages(props) {
  const images = props.images;
  return (
    <Carousel>
      {images.map((item) => {
        return (
          <Carousel.Item key={item.alt}>
            <img className="d-block w-100" src={process.env.REACT_APP_PHOTO_URL + item.src} alt={item.alt} />
            <Carousel.Caption className="caption-pos">
              <span className="subheading">Welcome</span>
              <Row>
                <Col lg={{ span: 6, offset: 3 }}>
                  <h1>{item.title}</h1>
                </Col>
              </Row>

              <p>{item.content}</p>
              <Button variant="light">Order Now</Button>
              <Button variant="light">View Menu</Button>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default SliderImages;
