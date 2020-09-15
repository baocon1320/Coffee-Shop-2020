import React, { Component } from 'react';
import AboutCustomers from './SubAboutView/AboutCustomers/AboutCustomers';
import AboutMenu from './SubAboutView/AboutMenu/AboutMenu';
import AboutNetwork from './SubAboutView/AboutNetwork/AboutNetwork.jsx';
import AboutStory from './SubAboutView/AboutStory/AboutStory.jsx';
import IntroComponent from '../CommonView/IntroComponent/IntroComponent';
export default class AboutView extends Component {
  render() {
    return (
      <div>
        <IntroComponent introDetail={this.props.introDetail} />
        <AboutStory />
        <AboutCustomers />
        <AboutMenu />
        <AboutNetwork />
      </div>
    );
  }
}
