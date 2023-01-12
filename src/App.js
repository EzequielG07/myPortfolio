import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import Greeting from "./components/Greeting";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import MySocialMedia from "./components/MySocialMedia";

function App() {
  return (
    <>
      <CustomNavbar />
      <Greeting />
      <hr />
      <AboutMe />
      <hr />
      <Experience />
      <hr />
      <Projects />
      <hr />
      <ContactMe />
      <hr />
      <MySocialMedia />
    </>
  );
}

export default App;
