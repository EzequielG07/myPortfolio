import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  ButtonSend,
  ContainerForm,
  DataForm,
  InputForm,
  TextForm,
} from "../styledComponents";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yi2lolj",
        "template_1gt05hf",
        form.current,
        "ejx5oWkcapZpjDtOT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <ContainerForm ref={form} onSubmit={sendEmail}>
      <DataForm>Nombre:</DataForm>
      <InputForm type="text" name="user_name" />
      <DataForm>Email:</DataForm>
      <InputForm type="email" name="user_email" />
      <DataForm>Mensaje:</DataForm>
      <TextForm name="message" />
      <ButtonSend type="submit" value="Enviar" />
    </ContainerForm>
  );
};
