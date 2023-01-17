import "../App.css";
import {
  ContainerGreetings,
  Text,
  Greetings,
  MyName,
  MyDegree,
  ButtonContact,
} from "./styledComponents";
import { FormattedMessage } from "react-intl";

const Greeting = () => {
  return (
    <ContainerGreetings id="init">
      <Greetings>
        <FormattedMessage id="saludo.hola" defaultMessage="Error Traslate" />
      </Greetings>
      <MyName>Ezequiel Guaymas</MyName>
      <MyDegree>
        <FormattedMessage
          id="saludo.profesion"
          defaultMessage="Error Traslate"
        />
      </MyDegree>
      <Text>
        <FormattedMessage id="saludo.resumen" defaultMessage="Error Traslate" />
      </Text>
      <a href="../CV Matias Ezequiel Guaymas.pdf" target="_blank">
        <ButtonContact>
          <FormattedMessage
            id="saludo.botonCv"
            defaultMessage="Error Traslate"
          />
        </ButtonContact>
      </a>
    </ContainerGreetings>
  );
};

export default Greeting;
