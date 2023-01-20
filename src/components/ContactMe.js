import React, { useState } from "react";
import { Form } from "./Form";
import {
  Container,
  ContainerInfo,
  Text,
  Subtitle,
  ButtonContact,
  Span,
} from "./styledComponents";
import { FormattedMessage } from "react-intl";

const ContactMe = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container id="contactMe">
        <ContainerInfo>
          <Subtitle>
            <Span>04. </Span>{" "}
            <FormattedMessage
              id="contacto.titulo"
              defaultMessage="Error Traslate"
            />
          </Subtitle>
          <Text>
            <FormattedMessage
              id="contacto.texto"
              defaultMessage="Error Traslate"
            />
          </Text>
          <ButtonContact onClick={handleShow}>
            <FormattedMessage
              id="contacto.boton"
              defaultMessage="Error Traslate"
            />
          </ButtonContact>
        </ContainerInfo>
      </Container>
      <Form show={show} handleClose={handleClose} />
    </>
  );
};

export default ContactMe;
