import React, { Component } from 'react';

import Footer from '../CommonView/Footer/Footer';
import ContactForm from './SubContactView/ContactForm.jsx';
import Questions from '../CommonView/Footer/SubFooter/Questions.jsx';
import Map from './SubContactView/Map.jsx';
import IntroComponent from '../CommonView/IntroComponent/IntroComponent';
export default class ContactView extends Component {
  render() {
    return (
      <div>
        <IntroComponent introDetail={this.props.introDetail} />
        <div className="d-flex flex-md-row justify-content-around flex-column container">
          <Questions />
          <ContactForm />
        </div>
        <Map />

        <Footer />
      </div>
    );
  }
}
