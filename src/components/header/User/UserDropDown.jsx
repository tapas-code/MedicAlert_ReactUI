import React, { useState } from "react";
import { Nav, Collapse, Image } from "react-bootstrap";
import UserImg from "../../../assets/images/face.jpg";

const UserDropDown = ({ handleUserLogout, setShowOverlay }) => {
    const [open, setOpen] = useState(false);
    const [transitionDuration, setTransitionDuration] = useState(300);

    const handleMouseEnter = () => {
        setShowOverlay(true);
        setOpen(true);
        setTransitionDuration(300);
    };
    const handleMouseLeave = () => {
        setShowOverlay(false);
        setOpen(false);
        setTransitionDuration(0);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-controls="user-profile-drop"
            aria-expanded={open}
            className=" hover--div pt-0">
            <Image
                fluid
                src={UserImg}
                alt="user svg"
                className="user--avatar position-relative rounded-5 border border-1 border-black"
            />

            <div className="position-relative">
                <Collapse in={open} timeout={transitionDuration} className="position-absolute end-0">
                        <div id="user-profile-drop" className="bg-white hover--body rounded-bottom-3" style={{width:'max-content'}}>
                        <p className="fs-6 fw-medium pt-4 px-3">View Profile</p>
                        <p className="fs-6 fw-medium px-3" onClick={handleUserLogout}>Sign Out</p>
                    </div>
                </Collapse>
            </div>
        </div>
    );
};


export default UserDropDown;
