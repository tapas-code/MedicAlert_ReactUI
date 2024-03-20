import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import MedIdMegaMenu from "./MedIdMegaMenu";

const MedicalIdDropdown = () => {

    return (
        <div
            className="med--id">
            <Nav.Link>Medical ID's</Nav.Link>
            <MedIdMegaMenu />
        </div>
    );
};

export default MedicalIdDropdown;
