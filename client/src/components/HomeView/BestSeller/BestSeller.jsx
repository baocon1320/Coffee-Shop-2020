import React from "react";
import TextIntroSection from "../../CommonView/TextIntroSection/TextIntroSection";
import { Row, Col } from "react-bootstrap";
import specialty from "../../../resouces/images/menuImages/specialty";
import ItemCard from "../../CommonView/ItemCard/ItemCard";

function BestSeller(props) {
    return (
        <div className="pb-5">
            <Row className="text-center py-5">
                <Col md={{ span: 6, offset: 3 }}>
                    <TextIntroSection title="Discover" subTitle="BEST COFFEE SELLERS" content={props.bestDrinksIntro} />
                </Col>
            </Row>
            <Row>
                {specialty.map((item) => {
                    return (
                        <Col md="3" className="px-3" key={item.title}>
                            <ItemCard imgSrc={item.src} title={item.title} content={item.content} />
                        </Col>
                    );
                })
                }
            </Row>
        </div>
    );
}

export default BestSeller;