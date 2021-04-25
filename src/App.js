import React, { useState } from 'react';
import Nav from './components/Nav'
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume'
import Footer from './components/Footer'
import './assets/css/colours.scss'

function App() {
  const [navSelected, setNavSelected] = useState('about');

  return (
    <div>
      <Nav
        navSelected={navSelected}
        setNavSelected={setNavSelected}
      />
      <main>
        {navSelected === 'contact' && (
          <ContactForm />    
        )}    
        {navSelected === 'portfolio'  && (
          <Portfolio />
        )}
        {navSelected === 'about'  && (
          <About />
        )}
         {navSelected === 'resume' && (
          <Resume />
        )}   
      </main>   
      <Footer />                
 
    </div>
  );
}

export default App;
