import React, { useState, useEffect } from "react";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const TopMessageBar = () => {

    return (
        <Navbar bg="transparent" variant="dark" fixed="top" style={{ zIndex: 1000 }}>
            <Navbar.Text className="mx-auto" style={{color: "green"}}>
                This is just a DEMO!
                <br/>
                (Project still under construction)
            </Navbar.Text>
        </Navbar>
    )
}

export default TopMessageBar;