import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import Signup from "./components/Signup";
import Bookingpage from "./components/bookingpage";
import Book from "./components/Book";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bookingpage" element={<Bookingpage />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;