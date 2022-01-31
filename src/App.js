import styles from "./App.module.css";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import Science from "./pages/Science";
import Code from "./pages/Code";
import Art from "./pages/Art";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/science" element={<Science />} />
          <Route path="/code" element={<Code />} />
          <Route path="/art" element={<Art />} />
          <Route path="/about_me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
