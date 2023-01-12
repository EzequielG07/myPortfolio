import "../App.css";
import {
  ContainerProjects,
  Text,
  Greetings,
  MyName,
  MyDegree,
} from "./styledComponents";

const Greeting = () => {
  return (
    <ContainerProjects>
      <Greetings>Hola, mi nombre es:</Greetings>
      <MyName>Ezequiel Guaymas</MyName>
      <MyDegree>Fronted Developer</MyDegree>
      <Text>
        I'm a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I'm focused on
        building accessible, human-centered products at Upstatement.
      </Text>
    </ContainerProjects>
  );
};

export default Greeting;
