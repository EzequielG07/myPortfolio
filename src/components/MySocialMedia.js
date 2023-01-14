import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../App.css";
import { ContainerMedia } from "./styledComponents";

const MySocialMedia = () => {
  return (
    <>
      <ContainerMedia>
        <FaGithub className="icons" />
        <FaLinkedin className="icons" />
      </ContainerMedia>
    </>
  );
};

export default MySocialMedia;
