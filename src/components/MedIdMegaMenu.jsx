import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import mid_data from "../data/MedIdMegaMenuData";
import MegaMenuCard from "./MegaMenuCard";

const MedIdMegaMenu = () => {
    return (
        <>
        <Container
            fluid
            className="vw-100 position-fixed start-0 med--menu rounded-bottom-4">
            <Row className="p-2" >
                <Col lg={9}>
                    <Row>
                        {mid_data && mid_data.map((cardData) => (
                            <Col lg={4} className="p-3" key={cardData.id} >
                                <MegaMenuCard cardData = {cardData} />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col lg={3}>Hello1</Col>
            </Row>
        </Container>
        </>
    );
};

export default MedIdMegaMenu;
