import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import NavBar from './components/navbar';
import Services from './components/services'; 
import Contact from './components/contact';
import Workercard from './components/Workercard';
import Singup from './components/singup';


function App() {
  return (

    <> 
    <NavBar />
    <Router>
      <Routes>
        
        <Route path="/"element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Workercard" element={<Workercard />} />
        <Route path="/Singup" element={<Singup/>} />

    
        
      </Routes>
    </Router>
    
    </>
  );
}

export default App;