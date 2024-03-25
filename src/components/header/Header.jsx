import React, { useEffect, useState } from "react";
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
    const [showOverlay, setShowOverlay] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const isSmallScreen = useMediaQuery({ maxWidth: 991 });

    // CHANGE NAVBAR BG TO WHITE WHEN SCROLL 
    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 0){
                setIsScrolled(true);
            }else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const handleShowOffcanvas = () => setShowOffcanvas(true);
    const handleCloseOffcanvas = () => setShowOffcanvas(false);

    const handleMouseOver = () => {
        setShowOverlay(true);
        document.body.style.overflow = 'hidden';
    };
    const handleMouseLeave = () => {
        setShowOverlay(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <Navbar
                id="myNavbar"
                expand="lg"
                className={`px-2 z-2 position-fixed top-0 w-100 ${isScrolled?'bg-white':''}`}>
                <Container fluid>
                    {/* ------ LOGO -----  */}
                    <Navbar.Brand>
                        <Image
                            className="navbar--logo"
                            src={MedicAlertLogo}
                            width="180px"
                        />
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
                            <Nav
                                className=" mx-auto d-flex align-items-center gap-lg-3 gap-xl-4 gap-xxl-5 font--small fw-bold"
                                onMouseOver={handleMouseOver}
                                onMouseLeave={handleMouseLeave}>
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
            <MainSidebar
                showOffcanvas={showOffcanvas}
                handleCloseOffcanvas={handleCloseOffcanvas}
                handleShowOffcanvas={handleShowOffcanvas}
            />

            {/* DARK OVERLAY  */}
            {showOverlay && <div className="overlay--dark z-1"></div>}
        </>
    );
};

export default Header;
