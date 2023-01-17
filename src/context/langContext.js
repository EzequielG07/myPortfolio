import React, { useState } from "react";
import MensajesCastellano from "./../lang/es-AR.json";
import MensajesIngles from "./../lang/en-US.json";
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
  const [mensajes, establecerMensajes] = useState(MensajesCastellano);
  const [locale, establecerLocale] = useState(`es-AR`);

  //   const establecerLenguaje = (lenguaje) => {
  //     console.log(`Cambiamos el lenguaje a`, lenguaje);
  //   };

  const establecerLenguaje = (lenguaje) => {
    switch (lenguaje) {
      case `es-AR`:
        establecerMensajes(MensajesCastellano);
        establecerLocale(`es-AR`);
        break;
      case `en-US`:
        establecerMensajes(MensajesIngles);
        establecerLocale(`en-US`);
        break;
      default:
        establecerMensajes(MensajesCastellano);
        establecerLocale(`es-AR`);
    }
  };

  return (
    <langContext.Provider value={{ establecerLenguaje: establecerLenguaje }}>
      <IntlProvider locale={locale} messages={mensajes}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
