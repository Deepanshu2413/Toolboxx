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