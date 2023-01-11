import "../App.css";
import { Container, ContainerInfo, Text, Subtitle } from "./styledComponents";

const ContactMe = () => {
  return (
    <>
      <Container>
        <ContainerInfo>
          <Subtitle>Contact Me 😁</Subtitle>
          <Text>
            My inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </Text>
          <button>Get in touch</button>
        </ContainerInfo>
      </Container>
    </>
  );
};

export default ContactMe;
