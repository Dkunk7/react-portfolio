import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [currentNav, setCurrentNav] = useState("home")

  return (
    <div className="App">
      <Navigation
        currentNav = {currentNav}
        setCurrentNav = {setCurrentNav}
        contactSelected = {contactSelected}
        setContactSelected = {setContactSelected}
      ></Navigation>
      <main>
        
      </main>
    </div>
  );
}

export default App;
