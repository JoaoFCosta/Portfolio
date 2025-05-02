import "./App.css";
import Experiencia from "./components/Experiencia";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sobre from "./components/Sobre";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Experiencia />
      <Footer />
    </>
  );
}

export default App;
