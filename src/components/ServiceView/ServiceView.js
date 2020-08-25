import React, { Component } from 'react';
import image3 from '../../resouces/images/backgroundImages/bg_3.jpg';
import { Image } from 'react-bootstrap';
import SubServiceView from './SubServiceView/SubServiceView';
import Footer from '../CommonView/Footer/Footer';
class ServiceView extends Component {
  render() {
    return (
      <div class="bg-dark">
        <Image src={image3} fluid />
        <SubServiceView />
        <Footer />
      </div>
    );
  }
}

export default ServiceView;
