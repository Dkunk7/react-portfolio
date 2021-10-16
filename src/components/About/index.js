import React from 'react';
import myFace from '../../assets/project-images/MeHAHA.png';

const About = () => {

    return (
        <div>
            <h1>
                Hi, I'm Dylan!
            </h1>
            <img src = {myFace} style = {{ width: "10%"}} alt = "my face"/>
        </div>
    )
}

export default About;