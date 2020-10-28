import React, { Component } from 'react'
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Card';

import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import CartTotals from './CartTotals'
const accessToken = JSON.parse(localStorage.getItem('user'))


const authAxios = axios.create({
  headers: {
    'auth-token': accessToken,
    'Content-Type': 'application/json'
  }
})
export default class ShoppingCart extends Component {
  state = {
   cartList: [],
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
handleDeleteCartProduct = async(itemId) => {
   const currentItems = this.state.cartList

this.setState({
   cartList: currentItems.filter(item => item._id !== itemId)
})
   await authAxios.delete(`http://localhost:5000/orders/` + itemId)
   .then((res)=>{
       console.log(res, 'item deleteed')
   }).catch((err) => {
       console.log(err)
   })
}

componentDidMount() {
     this.handleGetCartProducts();
   }

handleEditCartProduct = async(itemId) => {
 const currentItems = this.state.cartList

let currentQuantity = 0

currentItems.map((item) => {
 if(item._id == itemId){
     currentQuantity = item.quantity
 }
})
 await authAxios.patch(`http://localhost:5000/orders/${itemId}`, {quantity: currentQuantity} ).then((res) =>{
 }).catch((err) => {
     console.log(err)
 })
}


 handleUpdatePrice(id, value) {
  {this.handleOnchangePrice(id, value)}
  {this.handleEditCartProduct(id)}
 }

    handleOnchangePrice = (id, value) =>{
      this.state.cartList.map((item) => {
       if (item._id == id){
         if(item.quantity < value){
             item.quantity += 1
          this.setState({
            quantity: item.quantity
          })
         }else if(item.quantity > value && item.quantity > 1){
            item.quantity -= 1
            this.setState({quantity: item.quantity})
          }
        }
      })
    }

   

  cartList() {
     return this.state.cartList.map((currentproduct, i) => {
    let price = (currentproduct.quantity * currentproduct.product.price)
   
       return (
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
      
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> <Button variant="dark" onClick={(e) => this.handleDeleteCartProduct(currentproduct._id)}>
                  X
                </Button></td>
            <td><Image
                variant="top"
                src={'http://localhost:5000/' + currentproduct.product.productImage}
                alt={'http://localhost:5000/' + currentproduct.product.productImage}
                width={100}
                height={100}
              /></td>
      
            <td><h3>{currentproduct.product.name}</h3>
            <p>
              {currentproduct.product.content}
            </p>
            </td>
            <td><p>
              <span>$</span>{currentproduct.product.price}</p></td>
            <td><InputGroup size="sm" className="mb-3">
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" 
            value={currentproduct.quantity}
            // value={this.state.quantity}
            onChange={(e) => this.handleUpdatePrice(currentproduct._id, e.target.value)}
            type="number"/>
  
  </InputGroup>
             </td>
       <td>
         <p>
         <span>${price}</span>
         </p>
         </td>
          </tr>
         
      
        </tbody>
      </Table>
       );
     });
   }
 

  render() {
    const cartTotal = {
      width: "100%",
      display: "block",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      padding: "20px",

  }
    return (
      <div>
      {this.cartList()}
      <CartTotals  cartList = {this.state.cartList}/>

       </div>
    )
  }
}
