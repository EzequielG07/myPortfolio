import "../App.css";
import {
  ContainerGreetings,
  Text,
  Greetings,
  MyName,
  MyDegree,
  ButtonContact,
} from "./styledComponents";

const Greeting = () => {
  return (
    <ContainerGreetings id="init">
      <Greetings>Hola, mi nombre es:</Greetings>
      <MyName>Ezequiel Guaymas</MyName>
      <MyDegree>Desarrollador Front End</MyDegree>
      <Text>
        Soy Desarrollador Web especializado en el Front. Actualmente estoy
        enfocado en ampliar mis conocimientos constatemente en el mundo de la
        programacion.
      </Text>
      <a href="../CV Matias Ezequiel Guaymas.pdf" target="_blank">
        <ButtonContact>Descargar CV</ButtonContact>
      </a>
    </ContainerGreetings>
  );
};

export default Greeting;
