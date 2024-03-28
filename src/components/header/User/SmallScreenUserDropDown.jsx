import React, {useState} from "react";
import { Collapse, Image } from "react-bootstrap";
import UserImg from '../../../assets/images/face.jpg'

const SmallScreenUserDropDown = ({ handleUserLogout }) => {
    const [open, setOpen] = useState(false);

    const handleMouseClick = () => {
        setOpen(!open); 
    }

    return (
        <div
            onClick={handleMouseClick}
            aria-controls="user-profile-drop"
            aria-expanded={open}
            className=" hover--div">
            <Image
                fluid
                src={UserImg}
                alt="user svg"
                width={40}
                className="user--avatar position-relative rounded-5 border border-1 border-black"
            />

            <div className="position-relative">
                <Collapse
                    in={open}
                    
                    className="position-absolute end-0">
                    <div
                        id="user-profile-drop"
                        className="bg-white hover--body rounded-bottom-3"
                        style={{ width: "max-content" }}>
                        <p className="fs-6 fw-medium pt-4 px-3">View Profile</p>
                        <p
                            className="fs-6 fw-medium px-3"
                            onClick={handleUserLogout}>
                            Sign Out
                        </p>
                    </div>
                </Collapse>
            </div>
        </div>
    );
};

export default SmallScreenUserDropDown;
