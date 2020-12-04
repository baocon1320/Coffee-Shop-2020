import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import mainImage from "./about.jpg";
import TextIntroSection from "../../CommonView/TextIntroSection/TextIntroSection";

function ShopOverview(props) {
    return (
        <Row>
            <Col md="6" className="my-auto">
                <Image src={mainImage} fluid />
            </Col>
            <Col md="6" className="pr-5 my-auto">
                <TextIntroSection
                    title="Welcome"
                    subTitle={props.name}
                    content={props.fullIntro} />
            </Col>
        </Row>
    );
}

export default ShopOverview;