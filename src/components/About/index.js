import React from 'react';
import myFace from '../../assets/project-images/MeHAHA.png';
// import { Container } from 'react-bootstrap';

const About = () => {

    return (
        <div className = "home">
            <div className = "about-text">
                <h1 className = "mt-35 greeting">
                    Hi, I'm Dylan!
                </h1>
                <p className = "dev-talk">
                    I'm a web developer! My skills focus around the MERN stack, but I'm excited to learn anything that comes my way. Below, you'll find my recent work, and feel free to head over to the Contact me section to get in touch!
                </p>
            </div>
            <img className = "about-img" src = {myFace} alt = "my face"/>
        </div>
    )
}

export default About;