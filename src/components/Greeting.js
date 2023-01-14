import "../App.css";
import {
  ContainerGreetings,
  Text,
  Greetings,
  MyName,
  MyDegree,
} from "./styledComponents";

const Greeting = () => {
  return (
    <ContainerGreetings>
      <Greetings>Hola, mi nombre es:</Greetings>
      <MyName>Ezequiel Guaymas</MyName>
      <MyDegree>Fronted Developer</MyDegree>
      <Text>
        I'm a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I'm focused on
        building accessible, human-centered products at Upstatement.
      </Text>
    </ContainerGreetings>
  );
};

export default Greeting;
