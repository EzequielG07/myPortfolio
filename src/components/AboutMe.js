import "../App.css";
import {
  Container,
  ContainerInfo,
  ProfilePicture,
  Text,
  Subtitle,
  Span,
} from "./styledComponents";
import { FormattedMessage } from "react-intl";

const AboutMe = () => {
  return (
    <>
      <Container id="aboutMe">
        <ContainerInfo>
          <Subtitle>
            <Span>01. </Span>{" "}
            <FormattedMessage
              id="sobremi.titulo"
              defaultMessage="Error Traslate"
            />
          </Subtitle>
          <Text>
            <FormattedMessage
              id="sobremi.texto"
              defaultMessage="Error Traslate"
            />
          </Text>
        </ContainerInfo>
        <ProfilePicture
          src="https://res.cloudinary.com/duniuldn7/image/upload/v1673360933/portfolio/Foto_Usuario_jafsuu.jpg"
          alt="Foto de perfil"
        />
      </Container>
    </>
  );
};

export default AboutMe;
