import "../App.css";
import {
  Container,
  ContainerInfo,
  Text,
  Subtitle,
  ButtonContact,
} from "./styledComponents";

const ContactMe = () => {
  return (
    <>
      <Container id="contactMe">
        <ContainerInfo>
          <Subtitle>Contact Me 😁</Subtitle>
          <Text>
            My inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </Text>
          <ButtonContact>Get in touch</ButtonContact>
        </ContainerInfo>
      </Container>
    </>
  );
};

export default ContactMe;
