import "../App.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { ContainerMedia } from "./styledComponents";

const MySocialMedia = () => {
  return (
    <>
      <ContainerMedia>
        <a
          aria-label="Github Propio"
          href="https://github.com/EzequielG07"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icons" />
        </a>
        <a
          aria-label="LinkedIn Propio"
          href="https://www.linkedin.com/in/ezequiel-guaymas-6bab56106/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icons" />
        </a>
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/5491161658521"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="icons" />
        </a>
      </ContainerMedia>
    </>
  );
};

export default MySocialMedia;
