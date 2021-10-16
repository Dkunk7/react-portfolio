import React from 'react';
import { Nav } from 'react-bootstrap';

const Navigation = (props) => {
    const {
        currentNav,
        setCurrentNav,
        contactSelected,
        setContactSelected
    } = props;

    return (
        // Do I need anthing besides just the nav?
        <Nav className = "flex-row align-center">
            
            <Nav.Item>
                <Nav.Link className = "nav-link" >
                    <a href = "#about" className = "no-link-highlight" onClick = {() => setContactSelected(false)}>
                        Home
                    </a>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className = "nav-link" href = "#project-sect">
                    <a className = "no-link-highlight" onClick = {() => setContactSelected(false)}>
                        Projects
                    </a>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className = {`nav-link ${contactSelected && 'navActive'}`}>
                    <span onClick = {() => setContactSelected(true)}>Contact me</span>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;