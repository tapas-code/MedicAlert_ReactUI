import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Image, Button } from "react-bootstrap";
import MedicAlertLogo from "../../assets/images/Maf-log.png";
import UserSvg from "../../assets/svg/user.svg";
import MedicalIdDropdown from "./medical_ids/MedicalIdDropdown";
import Protection247Dropdown from "./247_protection/Protection247Dropdown";
import MemberStoriesDropdown from "./member_stories/MemberStoriesDropdown";
import { useMediaQuery } from "react-responsive";
import MainSidebar from "../sidebar/MainSidebar";

const Header = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const isSmallScreen = useMediaQuery({ maxWidth: 991 });

    const handleShowOffcanvas = () => setShowOffcanvas(true);
    const handleCloseOffcanvas = () => setShowOffcanvas(false);

    return (
        <>
            <Navbar id="myNavbar" expand="lg" className="px-2">
                <Container fluid>
                    {/* ------ LOGO -----  */}
                    <Navbar.Brand >
                        <Image className="navbar--logo" src={MedicAlertLogo} width="180px" />
                    </Navbar.Brand>

                    {/* ----- TOGGLE BUTTON -----  */}
                    <Navbar.Toggle
                        className="border-0 shadow-none"
                        onClick={handleShowOffcanvas}
                    />

                    {/* ----- COLLAPSING CONTENT -----  */}
                    {!isSmallScreen && (
                        <Navbar.Collapse id="basic-navbar-nav" className="">
                            {/* NAVBAR MENU  */}
                            <Nav className=" mx-auto d-flex align-items-center gap-lg-3 gap-xl-4 gap-xxl-5 font--small fw-bold">
                                <Nav.Link>How it Work's</Nav.Link>
                                <MedicalIdDropdown />
                                <Protection247Dropdown />
                                <MemberStoriesDropdown />
                            </Nav>

                            {/* DONATE BUTTON  */}
                            <img src={UserSvg} alt="user svg" width={14} />
                            <Button
                                className="rounded-5 px-4 font--small fw-bold ms-3"
                                variant="outline-dark">
                                Donate ❤️
                            </Button>
                        </Navbar.Collapse>
                    )}
                </Container>
            </Navbar>

            {/* OFFCANVAS CONTENT  */}
            <MainSidebar showOffcanvas={showOffcanvas} handleCloseOffcanvas={handleCloseOffcanvas} handleShowOffcanvas={handleShowOffcanvas}/>
        </>
    );
};

export default Header;
