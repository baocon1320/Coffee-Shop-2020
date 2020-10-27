import React, { Component } from 'react'
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

const accessToken = JSON.parse(localStorage.getItem('user'))


const authAxios = axios.create({
  headers: {
    'auth-token': accessToken,
    'Content-Type': 'application/json'
  }
})

export default class CartTotals extends Component {
    state = {
        // test: {this.props.cartList},
        cartList: [],
     
        quantity: 0,
      finalPrice: 0,
      product: {  name: "Tesla Roadster",
      price: 64998.67,
      description: "Cool car"}
        };
        handleGetCartProducts = async() => {
            await authAxios
              .get('http://localhost:5000/orders')
              .then((response) => {
                this.setState({ cartList: response.data.orders });
              })
              .catch((error) => {
                console.log(error);
              });
           };  
           componentDidMount() {
            this.handleGetCartProducts();
          }
        
    //    componentDidUpdate(){
    //     this.handleGetCartProducts();

    //    }
    
      handleToken = async(token, addresses) =>{
        const response = await axios.post(
            'http://localhost:5000/checkout/',
          { token, }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
          toast("Success! Check email for details", { type: "success" });
        } else {
          toast("Something went wrong", { type: "error" });
        }
      }
    handleTotalPrice = ()=> {
        let displayedList = this.state.cartList
        let price = displayedList.reduce((itemPrice, eachPrice) => itemPrice + (eachPrice.product.price * eachPrice.quantity), 0);
        let discount = 0
        let delivery = 0
        let totalPrice = (price - discount + delivery)
       this.setState({finalPrice: totalPrice})
        // switch(price) {
        //   case price > 50:
        //     discount = (price * .05)
        //     delivery = 5;
        //     totalPrice = (price - discount + delivery)
  
        //     break;
        //      case price > 100:
        //       discount = (price * .1)
        //       delivery = 10;
        //     totalPrice = (price - discount + delivery)
  
        //       break;
        //   default:
        //     discount = (price * .05)
        //     delivery = 5;
        //     totalPrice = (price - discount + delivery)
        // }
        return(
          
            <div>
              <p className="d-flex">
  <span>Subtotal</span>
  <span>${price}</span>
  </p>
  <p className="d-flex">
  <span>Delivery</span>
  <span>${delivery}</span>
  </p>
  <p className="d-flex">
  <span>Discount</span>
  <span>${discount}</span>
  </p>
  <hr/>
  <p className="d-flex total-price">
  <span>Total</span>
  <span>${totalPrice}</span>
  </p>
            </div>
            
        )
    }
  
    render() {
        const cartTotal = {
            width: "100%",
            display: "block",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "20px",
        }

        return (
<div className="mb-3" style={cartTotal}>

<div className="row justify-content-end">
<div className="col col-lg-3 col-md-6 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
<div className="cart-total mb-3">
<h3>Cart Totals</h3>
{this.handleTotalPrice()}
</div>
<p className="text-center">
{/* <Link  exact="true" to="/checkout" className="nav-link btn btn-primary py-3 px-4" activeClassName="link-active">
    Proceed to Checkout
  </Link> */}
        <StripeCheckout
        stripeKey="pk_test_51HfDmCBDf8h2Rv9qqKt7bExfi2urpUIZpYfcf5SG1cUUsl6GEOccl5xotEnTvRvVRryBD47RbcIM45RlnLntzayU00jSmTmI9G"
        token={this.handleToken}
        amount={10 * 100}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
      />

  </p>
</div>
</div>

</div>
        )
    }
}
