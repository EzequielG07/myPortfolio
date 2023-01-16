import "../App.css";
import {
  Container,
  ContainerInfo,
  ProfilePicture,
  Text,
  Subtitle,
  Span,
} from "./styledComponents";

const AboutMe = () => {
  return (
    <>
      <Container id="aboutMe">
        {/* <p>Hi, my name is</p>
        <h2>Matias Guaymas</h2>
        <h3>Front End Developer</h3> */}
        <ContainerInfo>
          <Subtitle>
            <Span>01. </Span> Sobre mi
          </Subtitle>
          <Text>
            ¡Hola! mi nombre es Ezequiel, soy de Buenos Aires, Argentina. Empece
            mis estudios sobre el desarrollo web por mi cuenta, hasta que decidi
            complementar mis conocimientos en la carrera de Desarrollador Full
            Stack en CoderHouse. Soy un programador que busca un ambiente de
            trabajo para poder aplicar mis conocimientos, adquirir experiencia,
            aprender mucho más y crecer profesionalmente en el mundo de la
            programación.
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
