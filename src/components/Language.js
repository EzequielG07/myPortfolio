import { ButtonContact, ContainerLanguages } from "./styledComponents";
import { useContext } from "react";
import { langContext } from "../context/langContext";

const Language = () => {
  const idiomaCambio = useContext(langContext);

  return (
    <>
      <ContainerLanguages>
        <ButtonContact onClick={() => idiomaCambio.establecerLenguaje(`es-AR`)}>
          ES
        </ButtonContact>
        <ButtonContact onClick={() => idiomaCambio.establecerLenguaje(`en-US`)}>
          EN
        </ButtonContact>
      </ContainerLanguages>
    </>
  );
};

export default Language;
