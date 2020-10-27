import IntroComponent from '../CommonView/IntroComponent/IntroComponent'

import BillingDetail from './BillingDetails/BillingDetail'
import Payment from './Payment/Payment'
import React, { Component } from 'react'
import CartTotals from '../Cart/CartView/ShoppingCart/CartTotals'
export default class CheckOutView extends Component {
    render() {
        return (
            <div>
        <IntroComponent introDetail={this.props.introDetail} />
                <BillingDetail /><CartTotals />
                <Payment/>
            </div>
        )
    }
}
