import React from 'react';
import Card from 'react-bootstrap/Card';

function Products(props) {
    const items = props.items;

    return (
        <div className="SubMenuItems">
          {items.map((item) => {
            return (
              <Card
                key={item.id}
                style={{ width: '18rem' }}
                className="bg-transparent border-transparent m-2"
              >
                <Card.Img
                  variant="top"
                  src={process.env.REACT_APP_PHOTO_URL + item.productImage}
                  alt={process.env.REACT_APP_PHOTO_URL + item.name}
                  width={300}
                  height={300}
                />
                <Card.Body>
                  <Card.Title className="text-light">{item.name}</Card.Title>
                  <Card.Text>{item.content}</Card.Text>
                </Card.Body>{' '}
              </Card>
            )
          })};
        </div>);
}

export default Products;
