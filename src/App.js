import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";

function App() {

  const padding = {
    padding: 5
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Link style={padding} to="/">
          home
        </Link>
        <Link style={padding} to="/about">
          about
        </Link>
        <Link style={padding} to="/contact">
          contact
        </Link>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
