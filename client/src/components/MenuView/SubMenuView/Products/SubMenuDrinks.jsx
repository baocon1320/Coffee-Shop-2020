import React from "react";
import Card from "react-bootstrap/Card";
import DrinkImages from "../../../../resouces/images/menuImages/drinkImages";
import "./SubMenu.scss";

const SubMenuDrinks = () => {
  const menuDrinks = DrinkImages.map(function (image, i) {
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
  return <div className="SubMenuItems">{menuDrinks}</div>;
};

export default SubMenuDrinks;
