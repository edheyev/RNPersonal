// import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import Science from "./pages/Science";
import Projects from "./pages/Projects";
import Wheel from "./pages/Wheel";
// import Art from "./pages/Art";
import AboutMe from "./pages/About";
import Contact from "./pages/Contact";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/science" element={<Science />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/art"
            component={() => {
              window.location.href = "https://edheyev.myportfolio.com/";
              return null;
            }}
          />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wheel" element={<Wheel />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
