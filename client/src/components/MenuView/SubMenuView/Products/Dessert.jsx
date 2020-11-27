import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';

import axios from 'axios';
const accessToken = JSON.parse(localStorage.getItem('user'))

const authAxios = axios.create({
  headers: {
    'auth-token': accessToken,
    'Content-Type': 'application/json'
  }
})
export default class Desserts extends Component {
  state = {
    desserts: [],
  };
  componentDidMount() {
    this.handleGetProduct();
  }
  handleGetProduct = () => {
    axios
      .get('http://localhost:5000/products/food')
      .then((response) => {
        console.log(response.data);
        this.setState({ desserts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addToCard = async (id, quantity) => {
    try {
      const response = await fetch('http://localhost:5000/orders', {
        method: "POST",
        body: JSON.stringify({
          productId: id,
          quantity: quantity,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          'auth-token': accessToken,
        },
      });
      console.log(id)
      let data = await response.json();
    
      console.log("Item Added To Cart");
      console.log(data);
    } catch (err) {
      alert("Something Went Wrong");
      console.log(err);
    }
      }
  dessertList() {
    return this.state.desserts.map((currentproduct, i) => {
      return (
        <Card
          key={i}
          style={{ width: '18rem' }}
          className="bg-transparent border-transparent"
        >
          <Card.Img
            variant="top"
            src={'http://localhost:5000/' + currentproduct.productImage}
            alt={'http://localhost:5000/' + currentproduct.productImage}
            width={300}
            height={300}
          />
          <Card.Body>
            <Card.Title>{currentproduct.name}</Card.Title>
            <Card.Text>{currentproduct.content}</Card.Text>
            <p>${currentproduct.price}</p>
            <Button variant="primary" onClick={(e) => this.addToCard(currentproduct._id)}>
              Add Item 
            </Button>{' '}
          </Card.Body>{' '}
        </Card>
      );
    });
  }
  render() {
    return <div className="SubMenuItems">{this.dessertList()}</div>;
  }
}
