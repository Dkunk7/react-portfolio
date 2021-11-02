import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
// import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Project from './components/Project';
import About from './components/About';
import 'react-bootstrap';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [currentNav, setCurrentNav] = useState("home");

  const [projects] = useState([
    { title: 'Regular Warehouse', image: 'RegWarehouseScreenshot', link: 'https://regular-warehouse.herokuapp.com/warehouse', repo: 'https://github.com/rrcampbell-exe/regular-warehouse'},
    { title: 'Run Buddy', image: 'RunBuddyScreenshot', link: "https://dkunk7.github.io/run-buddy/", repo: "https://github.com/Dkunk7/run-buddy"},
    { title: 'Advice from a Pirate', image: 'PirateAdviceScreenshot', link: 'https://kait-weishaar.github.io/Pirate-Advice/', repo: "https://github.com/kait-weishaar/Pirate-Advice"},
    { title: 'Volley-All', image: 'VolleyAllScreenshot', link: "https://volley-all.herokuapp.com/login", repo: "https://github.com/rrcampbell-exe/volley-all"}
  ]);

  return (
    <div className="App page-container">
      <div className = "content-wrap">
      <Header
        currentNav = {currentNav}
        setCurrentNav = {setCurrentNav}
        contactSelected = {contactSelected}
        setContactSelected = {setContactSelected}
      ></Header>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Project projects = {projects}></Project>
          </>
        ) : (
          <Contact></Contact>
        )} 
      </main>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
