import React from "react";
import TextIntroSection from "../../CommonView/TextIntroSection/TextIntroSection";
import { Row, Col } from "react-bootstrap";
import specialty from "../../../resouces/images/menuImages/specialty";
import ItemCard from "../../CommonView/ItemCard/ItemCard";

function BestSeller() {
    return (
        <div>
            <Row className="text-center py-5">
                <Col md={{ span: 6, offset: 3 }}>
                    <TextIntroSection title="Discover" subTitle="BEST COFFEE SELLERS" content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." />
                </Col>
            </Row>
            <Row>
                {specialty.map((item) => {
                    return (
                        <Col md="3" className="px-5" key={item.title}>
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