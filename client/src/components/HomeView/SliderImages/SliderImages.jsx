import React, { useState } from 'react';
import { Carousel, Row, Col, Button } from 'react-bootstrap';
//import bgImages from '../../../resouces/images/backgroundImages/bgImages';
import './style.css';
//import img1 from '../../../resouces/images/backgroundImages/bg_1.jpg';
import AlertPanel from '../../CommonView/AlertPanel/AlertPanel';

// This component to show the slider image on homepage
function SliderImages(props) {
  // list of images
  const images = props.images;

  // To control alert panel when clich on Order Now button
  const [alert, setAlert] = useState(false);

  function hideAlert() {
    setAlert(false);
  }

  function showAlert() {
    console.log("ordering");  
    setAlert(true);
  }

  return (
    <React.Fragment>
      <AlertPanel onClose={hideAlert} heading="Alert Heading" content="Alert Content" alert={alert}></AlertPanel>
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
                <Button variant="light" onClick={showAlert}>Order Now</Button>
                <Button variant="light">View Menu</Button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </React.Fragment>

  );
}

export default SliderImages;
