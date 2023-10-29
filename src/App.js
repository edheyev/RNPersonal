import styles from "./App.module.css";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import Science from "./pages/Science";
import Code from "./pages/Code";
import Art from "./pages/Art";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/science" element={<Science />} />
          <Route path="/code" element={<Code />} />
          {/* <Route
            path="/art"
            component={() => {
              window.location.href = "https://edheyev.myportfolio.com/";
              return null;
            }}
          /> */}
          <Route path="/about_me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
