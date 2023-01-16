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
            <Span>04. </Span> Contactame
          </Subtitle>
          <Text>
            Mi casilla de correo siempre se encuentra disponible. Cualquier
            pregunta o interes que se presente, me esforzare para contestarle a
            la brevedad.
          </Text>
          <ButtonContact onClick={handleShow}>Contactarse</ButtonContact>
        </ContainerInfo>
      </Container>
      <Form show={show} handleClose={handleClose} />
    </>
  );
};

export default ContactMe;
