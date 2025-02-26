import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from './components/Services';
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Bookingpage from "./components/Bookingpage";
import Book from "./components/Book";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Bookingpage" element={<Bookingpage />} />
        <Route path="/Book" element={<Book />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;