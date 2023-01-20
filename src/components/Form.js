import React from "react";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import { ContactUs } from "./utils/ContactUs";
import "../App.css";

export const Form = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modalColor">
          <Modal.Title>Enviame un Correo</Modal.Title>
          <CloseButton variant="white" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body className="modalColor">
          <ContactUs />
        </Modal.Body>
      </Modal>
    </>
  );
};
