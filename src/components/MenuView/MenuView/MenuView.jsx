import React, { Component } from 'react';
// import { Image } from 'react-bootstrap';
// import image3 from '../../../resouces/images/backgroundImages/bg_3.jpg';
import SubMenuView from './SubMenuView/SubMenuView.jsx';
import Footer from '../../CommonView/Footer/Footer';
import IntroComponent from '../../CommonView/IntroComponent/IntroComponent';
class MenuView extends Component {
  render() {
    return (
      <div>
        {/* <Image src={image3} fluid /> */}
        <IntroComponent introDetail={this.props.introDetail} />
        <SubMenuView />
        <Footer />
      </div>
    );
  }
}

export default MenuView;
