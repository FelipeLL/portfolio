import "./styles/style.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      {/* Sección home */}
      <Home />

      {/* Sección about */}
      <About />

      {/* Sección projects */}
      <Projects />

      <Footer />
    </>
  );
};

export default App;
