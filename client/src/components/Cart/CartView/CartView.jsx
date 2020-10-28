import React, { Component } from 'react';
import IntroComponent from '../../CommonView/IntroComponent/IntroComponent';
import BestSeller from '../../HomeView/BestSeller/BestSeller';
import ShoppingCart from './ShoppingCart/ShoppingCart';

export default class CartView extends Component {
  render() {
    return (
      <div>
        <IntroComponent introDetail={this.props.introDetail} />
        <ShoppingCart />
        <div className="container">
          <BestSeller />
        </div>
      </div>
    );
  }
}
