import React, { useState } from 'react';
import Navigation from '../Navigation'; // This is a child of Header

const Header = (props) => {

    const {
        currentNav,
        setCurrentNav,
        contactSelected,
        setContactSelected
    } = props;

    return(
        <header>
            <h2>
                <a hred = "/">
                    <span>Dylan?</span> {/* Change this? Add logo? */}
                </a>
            </h2>
            <Navigation
                currentNav = {currentNav}
                setCurrentNav = {setCurrentNav}
                contactSelected = {contactSelected}
                setContactSelected = {setContactSelected}
            >
            </Navigation>
        </header>
    );
}

export default Header;