import React, { Component } from 'react';
import IntroComponent from '../CommonView/IntroComponent/IntroComponent';
import SubServiceView from './SubServiceView/SubServiceView.jsx';
class ServiceView extends Component {
  render() {
    return (
      <div>
        <IntroComponent introDetail={this.props.introDetail} />
        <SubServiceView />
      </div>
    );
  }
}

export default ServiceView;
