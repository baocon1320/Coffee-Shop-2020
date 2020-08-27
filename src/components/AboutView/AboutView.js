import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import image3 from '../../resouces/images/backgroundImages/bg_3.jpg';
import AboutCustomers from './SubAboutView/AboutCustomers';
import AboutMenu from './SubAboutView/AboutMenu';
import AboutNetwork from './SubAboutView/AboutNetwork';
import AboutStory from './SubAboutView/AboutStory';
import Footer from '../CommonView/Footer/Footer';
export default class AboutView extends Component {
  render() {
    return (
      <div class="bg-dark">
        <Image src={image3} fluid />
        <AboutStory />
        <AboutCustomers />
        <AboutMenu />
        <AboutNetwork />
        <Footer />
      </div>
    );
  }
}
