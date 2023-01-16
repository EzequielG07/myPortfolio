import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import Greeting from "./components/Greeting";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import MySocialMedia from "./components/MySocialMedia";
import Language from "./components/Language";

function App() {
  return (
    <>
      <CustomNavbar />
      <Greeting />
      <AboutMe />
      <Experience />
      <Projects />
      <ContactMe />
      <MySocialMedia />
      <Language />
    </>
  );
}

export default App;
