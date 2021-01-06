// import React, { Component } from 'react';
// import axios from 'axios';
// import Image from 'react-bootstrap/Image';
// import Button from 'react-bootstrap/Card';

// import Table from 'react-bootstrap/Table';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
// import CartTotals from './CartTotals';
// const accessToken = JSON.parse(localStorage.getItem('user'));

// const authAxios = axios.create({
//   headers: {
//     'auth-token': accessToken,
//     'Content-Type': 'application/json',
//   },
// });
// export default class ShoppingCart extends Component {
//   state = {
//     cartList: [],
//   };

//   handleGetCartProducts = async () => {
//     await authAxios
//       .get('http://localhost:5000/orders')
//       .then((response) => {
//         this.setState({ cartList: response.data.orders });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   handleDeleteCartProduct = async (itemId) => {
//     const currentItems = this.state.cartList;

//     this.setState({
//       cartList: currentItems.filter((item) => item._id !== itemId),
//     });
//     await authAxios
//       .delete(`http://localhost:5000/orders/` + itemId)
//       .then((res) => {
//         console.log(res, 'item deleteed');
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   componentDidMount() {
//     this.handleGetCartProducts();
//   }

//   handleEditCartProduct = async (itemId) => {
//     const currentItems = this.state.cartList;

//     let currentQuantity = 0;

//     currentItems.map((item) => {
//       if (item._id == itemId) {
//         currentQuantity = item.quantity;
//       }
//     });
//     await authAxios
//       .patch(`http://localhost:5000/orders/${itemId}`, {
//         quantity: currentQuantity,
//       })
//       .then((res) => {})
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   handleUpdatePrice(id, value) {
//     {
//       this.handleOnchangePrice(id, value);
//     }
//     {
//       this.handleEditCartProduct(id);
//     }
//   }

//   handleOnchangePrice = (id, value) => {
//     this.state.cartList.map((item) => {
//       if (item._id == id) {
//         if (item.quantity < value) {
//           item.quantity += 1;
//           this.setState({
//             quantity: item.quantity,
//           });
//         } else if (item.quantity > value && item.quantity > 1) {
//           item.quantity -= 1;
//           this.setState({ quantity: item.quantity });
//         }
//       }
//     });
//   };

//   cartList() {
//     return this.state.cartList.map((currentproduct, i) => {
//       let price = currentproduct.quantity * currentproduct.product.price;

//       return (
//         <Table striped bordered hover variant="dark">
//           <thead>
//             <tr>
//               <th></th>
//               <th></th>
//               <th>Product</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>
//                 {' '}
//                 <Button
//                   className="cardRemove"
//                   variant="dark"
//                   onClick={(e) =>
//                     this.handleDeleteCartProduct(currentproduct._id)
//                   }
//                 >
//                   X
//                 </Button>
//               </td>
//               <td>
//                 <Image
//                   variant="top"
//                   src={
//                     'http://localhost:5000/' +
//                     currentproduct.product.productImage
//                   }
//                   alt={
//                     'http://localhost:5000/' +
//                     currentproduct.product.productImage
//                   }
//                   width={100}
//                   height={100}
//                 />
//               </td>

//               <td>
//                 <h3>{currentproduct.product.name}</h3>
//                 <p>{currentproduct.product.content}</p>
//               </td>
//               <td>
//                 <p>
//                   <span>$</span>
//                   {currentproduct.product.price}
//                 </p>
//               </td>
//               <td>
//                 <InputGroup size="sm" className="mb-3">
//                   <FormControl
//                     aria-label="Small"
//                     aria-describedby="inputGroup-sizing-sm"
//                     value={currentproduct.quantity}
//                     // value={this.state.quantity}
//                     onChange={(e) =>
//                       this.handleUpdatePrice(currentproduct._id, e.target.value)
//                     }
//                     type="number"
//                   />
//                 </InputGroup>
//               </td>
//               <td>
//                 <p>
//                   <span>${price}</span>
//                 </p>
//               </td>
//             </tr>
//           </tbody>
//         </Table>
//       );
//     });
//   }

//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">{this.cartList()}</div>
//         </div>
//         <div className="row justify-content-end">
//           <div className="col col-lg-3 col-md-6 mt-5 cart-wrap ">
//             <CartTotals cartList={this.state.cartList} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCart } from "../../../MenuView/SubMenuView/cartHelpers";
import Card from "../../../MenuView/SubMenuView/MenuCard";
import Checkout from "../../../CheckOutView/Checkout";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);

  useEffect(() => {
    setItems(getCart());
  }, [run]);

  const showItems = (items) => {
    return (
      <div>
        <h2>Your cart has {`${items.length}`} items</h2>
        <hr />
        {items.map((product, i) => (
          <Card
            key={i}
            product={product}
            showAddToCartButton={false}
            cartUpdate={true}
            showRemoveProductButton={true}
            setRun={setRun}
            run={run}
          />
        ))}
      </div>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
    </h2>
  );

  return (
    <div className="row">
      <div className="col-6">
        {items.length > 0 ? showItems(items) : noItemsMessage()}
      </div>

      <div className="col-6">
        <h2 className="mb-4">Your cart summary</h2>
        <hr />
        <Checkout products={items} setRun={setRun} run={run} />
      </div>
    </div>
  );
};

export default Cart;
