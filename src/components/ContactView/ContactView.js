import React, { Component } from 'react';
import image3 from '../../resouces/images/backgroundImages/bg_3.jpg';
import { Image } from 'react-bootstrap';
import Footer from '../CommonView/Footer/Footer';
import ContactForm from '../ContactView/SubContactView/ContactForm';
import Questions from '../CommonView/Footer/SubFooter/Questions';
import Map from './SubContactView/Map';
export default class ContactView extends Component {
  render() {
    return (
      <div class="bg-dark">
        <Image src={image3} fluid />
        <div className="d-flex flex-row justify-content-around container">
          <Questions />
          <ContactForm />
        </div>
        <Map />

        <Footer />
      </div>
    );
  }
}
