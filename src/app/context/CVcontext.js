"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CVcontext = createContext();

export const CvProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lang, setLang] = useState("es");

  const translations = {
    es: {
      hello: "HOLA!",
      pila_tecnologica: "Pila Tecnológica:",
      mas: "y, aún hay más.",
      experiencia: "Experiencia laboral:",
      footer: {
        copyright: "Todos los derechos reservados",
        titulo_uno: "Redes Sociales",
        titulo_dos: "Mira mi hoja de vida:",
        subtitulo_uno: "CV Español",
        subtitulo_dos: "CV Ingles",
        subtitulo_tres: "Teléfono:",
        titulo_tres: "Trabajemos!"
      },
    },
    en: {
      hello: "HELLO!",
      pila_tecnologica: "Technology Stack:",
      mas: "and, there´s more.",
      experiencia: "Work Experience:",
      footer: {
        copyright: "All rights reserved",
        titulo_uno: "Social Networks",
        titulo_dos: "Check my resume:",
        subtitulo_uno: "Spanish CV",
        subtitulo_dos: "English CV",
        subtitulo_tres: "Phone:",
        titulo_tres: "Let's work!"
      },
    },
  };

  // Función para cambiar el idioma y recargar el JSON correspondiente
  const changeLanguage = (newLang) => {
    setLang(newLang);
    setLoading(true);
    fetch(
      newLang === "es"
        ? "https://almacenamientojson.blob.core.windows.net/json-files/infoSpanish.json"
        : "https://almacenamientojson.blob.core.windows.net/json-files/infoEnglish.json"
    )
      .then((response) => {
        if (!response.ok) throw new Error("Error al obtener el JSON");
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    changeLanguage(lang);
  }, []);

  return (
    <CVcontext.Provider value={{ data, loading, error, lang, changeLanguage, translations }}>
      {children}
    </CVcontext.Provider>
  );
};

export const useCvData = () => useContext(CVcontext);
