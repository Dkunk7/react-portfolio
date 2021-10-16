import React, { useState } from 'react';
import Navigation from '../Navigation'; // This is a child of Header
import myLogo from '../../assets/project-images/DKLogo1.png';


const Header = (props) => {

    const {
        currentNav,
        setCurrentNav,
        contactSelected,
        setContactSelected
    } = props;

    return(
        <header>
            <div className = "align-center left-align">
                <a href = "/" className = "logo-img">
                    <img src = {myLogo} style = {{ width: "20%" }} alt = "logo"/>
                </a>
                <h1>Dylan Kunkel</h1>
            </div>
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