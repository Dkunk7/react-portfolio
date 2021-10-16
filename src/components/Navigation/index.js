import React from 'react';
import myLogo from '../../assets/project-images/DKLogo1.png';

const Navigation = (props) => {
    const {
        currentNav,
        setCurrentNav,
        contactSelected,
        setContactSelected
    } = props;

    return (
        // Do I need anthing besides just the nav?
        <nav>
            <a href = "/">
                <img src = {myLogo} style = {{ width: "6%" }} alt = "logo"/>
            </a>
            <ul className = "flex-row">
                <li >
                    <a href = "#about" onClick = {() => setContactSelected(false)}>
                        Home
                    </a>
                </li>
                <li className = {/* other class(es) */ `${contactSelected && 'navActive'}`}>
                    <span onClick = {() => setContactSelected(true)}>Contact me</span>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;