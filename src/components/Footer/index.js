import React from 'react';

const Footer = () => {

    return(
        <footer className = "flex-row justify-space-around">
            <ul className = "flex-row no-bullets">
                <li className = "mr-35">Here's my <a href = "https://github.com/Dkunk7" target = "_blank" rel="noreferrer" className = "info-link">GitHub</a></li>
                <li>Send me an email <a href = "mailto:drkunkel7@gmail.com" target = "_blank" rel="noreferrer" className = "info-link">here</a></li>
            </ul>
            <h3>Thanks for stopping by!</h3>
        </footer>
    );
}

export default Footer;