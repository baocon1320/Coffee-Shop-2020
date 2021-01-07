//did not use this component //
//did not use this component //
//did not use this component //

import IntroComponent from '../CommonView/IntroComponent/IntroComponent';

import BillingDetail from './BillingDetails/BillingDetail';
import Payment from './Payment/Payment';
import React, { Component } from 'react';
import CartTotals from '../Cart/CartView/ShoppingCart/CartTotals';
export default class CheckOutView extends Component {
  render() {
    return (
      <div>
        <IntroComponent introDetail={this.props.introDetail} />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <BillingDetail />
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col col-lg-3 col-md-6 mt-5 cart-wrap ">
              <CartTotals />
              <Payment />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
