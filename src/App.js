import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [currentNav, setCurrentNav] = useState("home");

  const [projects] = useState([
    { title: 'Run Buddy', image: 'RunBuddyScreenshot', link: "https://dkunk7.github.io/run-buddy/" },
    { title: 'Advice from a Pirate', image: 'PirateAdviceScreenshot', link: 'https://kait-weishaar.github.io/Pirate-Advice/'},
    { title: 'Volley-All', image: 'VolleyAllScreenshot', link: "https://volley-all.herokuapp.com/login"}
  ]);

  return (
    <div className="App">
      <Header
        currentNav = {currentNav}
        setCurrentNav = {setCurrentNav}
        contactSelected = {contactSelected}
        setContactSelected = {setContactSelected}
      ></Header>
      <main>
        {!contactSelected ? (
          <>
            <Project projects = {projects}></Project>
          </>
        ) : (
          <Contact></Contact>
        )} 
      </main>
    </div>
  );
}

export default App;
