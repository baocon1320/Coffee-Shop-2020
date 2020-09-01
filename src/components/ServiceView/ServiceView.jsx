import React, { Component } from 'react';
import IntroComponent from '../CommonView/IntroComponent/IntroComponent';
import SubServiceView from './SubServiceView/SubServiceView.jsx';
import Footer from '../CommonView/Footer/Footer';
class ServiceView extends Component {
  render() {
    return (
      <div>
        <IntroComponent introDetail={this.props.introDetail} />
        <SubServiceView />
        <Footer />
      </div>
    );
  }
}

export default ServiceView;
