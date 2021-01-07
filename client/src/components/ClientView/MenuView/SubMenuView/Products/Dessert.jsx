import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
//import SpinnerView from '../CommonView/SpinnerView/SpinnerView';
//import AlertPanel from '../CommonView/AlertPanel/AlertPanel';// handle error
import useHttpClient from '../../../../share/hook/http-hook';

import axios from 'axios';
const accessToken = JSON.parse(localStorage.getItem('user'))

const authAxios = axios.create({
  headers: {
    'auth-token': accessToken,
    'Content-Type': 'application/json'
  }
})


function Desserts(props) {
  const [deserts, setDeserts] = useState([]);
  const { isLoading, alert, error, sendRequest, alertHandler } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/products/food');
        setDeserts(responseData);
      } catch (err) {

      };
    };
    fetchData();

  }, [sendRequest]);

  const addToCard = async (id, quantity) => {
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

  return (
    <div className="SubMenuItems">
      {deserts.map((currentproduct, i) => {
        return (
          <Card
            key={i}
            style={{ width: '18rem' }}
            className="bg-transparent border-transparent m-2"
          >
            <Card.Img
              variant="top"
              src={process.env.REACT_APP_PHOTO_URL + currentproduct.productImage}
              alt={process.env.REACT_APP_PHOTO_URL + currentproduct.productImage}
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
        )
      })};
    </div>);
}

export default Desserts;