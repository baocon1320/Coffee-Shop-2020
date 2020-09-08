import React from "react";
import { Card } from "react-bootstrap";

function ItemCard(props) {
    return (
        <Card border="transparent" bg="transparent">
                <Card.Img variant="top" src={props.imgSrc} style={{heigh: "200px"}}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.content}
                    </Card.Text>
                </Card.Body>
        </Card>
    );
}

export default ItemCard;