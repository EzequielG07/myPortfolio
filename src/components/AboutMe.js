import "../App.css";
import {
  Container,
  ContainerInfo,
  ProfilePicture,
  Text,
  Subtitle,
} from "./styledComponents";

const AboutMe = () => {
  return (
    <>
      <Container id="aboutMe">
        {/* <p>Hi, my name is</p>
        <h2>Matias Guaymas</h2>
        <h3>Front End Developer</h3> */}
        <ContainerInfo>
          <Subtitle>About Me</Subtitle>
          <Text>
            Hi! my name is Ezequiel, i'm from Buenos Aires, Argentina. I´ve
            started studied about web development on my own , until I decided to
            complement my knowledge in the fullstack developer career at
            CoderHouse. I´m a programmer looking for a work team to be able to
            apply my knowledge, gain experience, learn much more and grow
            professionally in this career that I am passionate about.
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
