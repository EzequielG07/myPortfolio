import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ContactUs } from "./utils/ContactUs";
import "../App.css";

export const Form = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modalColor" closeButton>
          <Modal.Title>Enviame un Correo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalColor">
          <ContactUs />
        </Modal.Body>
        <Modal.Footer className="modalColor">
          <Button variant="dark" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
