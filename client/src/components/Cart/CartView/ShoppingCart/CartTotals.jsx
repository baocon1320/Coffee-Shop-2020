import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import React from "react";
// let userID = JSON.parse(localStorage.getItem("userID"));
// const accessToken = JSON.parse(localStorage.getItem("user"));

// const authAxios = axios.create({
//   headers: {
//     "auth-token": accessToken,
//     "Content-Type": "application/json",
//   },
// });
// const createUserOrder = async (userId, order, createOrderData) => {
//   await authAxios
//     .post(`http://localhost:5000/userorder/` + userId, order, axiosConfig)
//     .then((res) => {
//       return res.json();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
export default function CartTotals(props) {
  let displayedList = props.cartList;
  // console.log();
  let price = displayedList.reduce(
    (itemPrice, eachPrice) =>
      itemPrice + eachPrice.product.price * eachPrice.quantity,
    0
  );
  let discount = 0;
  let delivery = 0;
  let totalPrice = price - discount + delivery;
  if (price > 50 && price < 100) {
    discount = price * 0.05;
    delivery = 5;
    totalPrice = price - discount + delivery;
  } else if (price > 100) {
    discount = price * 0.07;
    delivery = 7;
    totalPrice = price - discount + delivery;
  } else {
    discount = price * 0.0;
    delivery = 0;
    totalPrice = price - discount + delivery;
  }

  const handleToken = async (token, addresses) => {
    let product = {
      name: "Coffee",
      price: totalPrice,
      description: "delicious coffee",
      products: displayedList,
      userID: localStorage.getItem("userID"),
    };

    const response = await axios.post("http://localhost:5000/checkout/", {
      token,
      product,
    });
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  };
  const cartTotal = {
    width: "100%",
    display: "block",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "20px",
  };
  return (
    <div className="cartTotal">
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
      <hr />
      <p className="d-flex total-price">
        <span>Total</span>
        <span>${totalPrice}</span>
      </p>
      <StripeCheckout
        stripeKey="pk_test_51HfDmCBDf8h2Rv9qqKt7bExfi2urpUIZpYfcf5SG1cUUsl6GEOccl5xotEnTvRvVRryBD47RbcIM45RlnLntzayU00jSmTmI9G"
        token={handleToken}
        amount={totalPrice * 100}
        name="coffee"
        billingAddress
        shippingAddress
      />
    </div>
  );
}
