import React, { Component } from 'react';

import { Image } from 'react-bootstrap';
import image3 from '../../../resouces/images/backgroundImages/bg_3.jpg';

import SubMenuView from './SubMenuView/SubMenuView';
import Footer from '../../CommonView/Footer/Footer';
class MenuView extends Component {
  render() {
    return (
      <div class="bg-dark">
        <Image src={image3} fluid />
        <SubMenuView />
        <Footer />
      </div>
    );
  }
}

export default MenuView;
