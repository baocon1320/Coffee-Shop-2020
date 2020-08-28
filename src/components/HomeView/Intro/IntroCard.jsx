import React from "react";
import { Col } from "react-bootstrap"; 

function IntroCard(props){
    return (
        <Col md={{span: 3, offset: 1}} className="text-center">
            <div>
            {props.children} 
            </div>
            <div>
                <h4>{props.title}</h4>
                <p>{props.info}</p>
            </div>
        </Col>
    );
}

export default IntroCard;