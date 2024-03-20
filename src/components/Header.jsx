import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Image, Button } from "react-bootstrap";
import MedicAlertLogo from '../assets/images/Maf-log.png';
import UserSvg from '../assets/svg/user.svg'
import MedicalIdDropdown from "./MedicalIdDropdown";

const Header = () => {
    return (
        <>
        <Navbar id="myNavbar" expand="lg" className="bg-transparent px-2">
            <Container fluid>
                {/* ------ LOGO -----  */}
                <Navbar.Brand className="">
                    <Image src={MedicAlertLogo} width="180px" />
                </Navbar.Brand>

                {/* ----- TOGGLE BUTTON -----  */}
                <Navbar.Toggle 
                className="border-0 shadow-none"
                aria-controls="basic-navbar-nav" />

                {/* ----- COLLAPSING CONTENT -----  */}
                <Navbar.Collapse id="basic-navbar-nav" className="">

                    {/* NAVBAR MENU  */}
                    <Nav className=" mx-auto d-flex align-items-center gap-lg-3 gap-xl-4 gap-xxl-5 font--small fw-bold">
                        <Nav.Link>How it Work's</Nav.Link>
                        <MedicalIdDropdown />
                        <Nav.Link>24/7 Protection</Nav.Link>
                        <Nav.Link>Member Stories</Nav.Link>
                    </Nav>

                    {/* DONATE BUTTON  */}
                    <img src={UserSvg} alt="user svg" width={14}/>
                    <Button className="rounded-5 px-4 font--small fw-bold ms-3" variant="outline-dark">Donate ❤️</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default Header;
