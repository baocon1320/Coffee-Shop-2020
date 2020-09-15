import React, { Component } from 'react';
import SubMenuView from './SubMenuView/SubMenuView.jsx';
import IntroComponent from '../../CommonView/IntroComponent/IntroComponent';
class MenuView extends Component {
  render() {
    return (
      <div>
        {/* <Image src={image3} fluid /> */}
        <IntroComponent introDetail={this.props.introDetail} />
        <SubMenuView />
      </div>
    );
  }
}

export default MenuView;
