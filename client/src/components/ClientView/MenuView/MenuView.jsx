import React from 'react';
import SubMenuView from './SubMenuView/SubMenuView.jsx';
import IntroComponent from '../CommonView/IntroComponent/IntroComponent';

function MenuView(props) {
  const introDetail = {
    src: props.menuInfo,
    text: '',
    alt: 'Goc Cafe Menu'
  };
    return (
      <div>
        <IntroComponent introDetail={introDetail} />
        <SubMenuView />
      </div>
    );
}

export default MenuView;
