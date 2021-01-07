import React from 'react';
import '../index.css';
import { Image, Row, Col } from 'react-bootstrap';
import insImages1 from '../../../../../resouces/images/backgroundImages/bgImages';
import insImages2 from '../../../../../resouces/images/menuImages/specialty';

function Instagram() {
  const mergeImgs = [...insImages1, ...insImages2.slice(0, 3)];
  return (
    <div>
      <h4>Facebook</h4>

      <Row className="th-row-thumbail-nopad">
        {mergeImgs.map((item, i) => {
          return (
            <Col sm="4" className="th-thumbail-nopad" key={i}>
              <a href="https://www.facebook.com/Vinh-H%C3%B2a-143202909175804" target="_blank">
                <Image src={item.src} className="th-thumbail" />
              </a>
            </Col>
          );
        })}
      </Row>
    </div>
    /*
    <div className="footer-item services ">
      <h2 className="text-uppercase mb-4 footer-intro">SERVICES</h2>
      <div className="services-list">
        <ul className="list-group">
          <li className="">cooked</li>
          <li className="">deliver</li>
          <li className="">quality foods</li>
          <li className="">mixed</li>
        </ul>
      </div>
    </div>
    */
  );
}

export default Instagram;
