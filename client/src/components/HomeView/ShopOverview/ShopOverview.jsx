import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import mainImage from "./about.jpg";
import TextIntroSection from "../../CommonView/TextIntroSection/TextIntroSection";

function ShopOverview() {
    return (
        <Row>
            <Col md="6" className="my-auto">
                <Image src={mainImage} fluid />
            </Col>
            <Col md="6" className="pr-5 my-auto">
                <TextIntroSection
                    title="Welcome"
                    subTitle="TH Coffee Shop"
                    content="On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word  and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their." />
            </Col>
        </Row>
    );
}

export default ShopOverview;