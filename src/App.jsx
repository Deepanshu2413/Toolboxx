import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import NavBar from './components/navbar';
import Services from './components/services'; 
import Contact from './components/contact';

import Singup from './components/singup';
import Bookingpage from './components/bookingpage';
import Footer from './components/footer';
import Book from './components/Book';

function App() {
  return (

    <> 
    <NavBar />
    <Router>
      <Routes>
        
        <Route path="/"element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Bookingpage" element={<Bookingpage/>} />
        <Route path="/Singup" element={<Singup/>} />
        <Route path="/Book" element={<Book />} />

      </Routes>
      
      
    </Router>
   
    <Footer/>
    </>
  );
}

export default App;