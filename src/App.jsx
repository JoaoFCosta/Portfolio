import "./App.css";
import Experiencia from "./components/Experiencia";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Sobre from "./components/Sobre";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Experiencia />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
