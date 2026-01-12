import Navbar from "./Components/Navbar";
import Hpage from "./Components/Hpage";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./index.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
