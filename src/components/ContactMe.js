import React, { useState } from "react";
import "../App.css";
import { Form } from "./Form";
import {
  Container,
  ContainerInfo,
  Text,
  Subtitle,
  ButtonContact,
  Span,
} from "./styledComponents";

const ContactMe = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container id="contactMe">
        <ContainerInfo>
          <Subtitle>
            <Span>04. </Span> Contact Me 😁
          </Subtitle>
          <Text>
            My inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </Text>
          <ButtonContact onClick={handleShow}>Get in touch</ButtonContact>
        </ContainerInfo>
      </Container>
      <Form show={show} handleClose={handleClose} />
    </>
  );
};

export default ContactMe;
