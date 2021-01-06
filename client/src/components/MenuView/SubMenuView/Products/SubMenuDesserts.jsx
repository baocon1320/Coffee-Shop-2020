import React from "react";
import DessertImages from "../../../../resouces/images/menuImages/dessertImages";
import "./SubMenu.scss";
import { Card } from "react-bootstrap";
const SubMenuDesserts = () => {
  const menuDesserts = DessertImages.map(function (image, i) {
    return (
      <Card
        key={i}
        style={{ width: "18rem" }}
        className="bg-transparent border-transparent"
      >
        <Card.Img
          variant="top"
          src={image.src}
          alt={image.alt}
          width={300}
          height={300}
        />
        <Card.Body>
          <Card.Title>{image.title}</Card.Title>
          <Card.Text>{image.content}</Card.Text>
          <p>{image.price}</p>
        </Card.Body>{" "}
      </Card>
    );
  });
  return <div className="SubMenuItems">{menuDesserts}</div>;
};

export default SubMenuDesserts;
