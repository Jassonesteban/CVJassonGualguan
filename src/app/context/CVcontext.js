"use client";

import { createContext, useContext, useEffect, useState } from "react";

import infoSpanish from "../infoCV/infoSpanish.json";
import infoEnglish from "../infoCV/infoEnglish.json";

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
    try {
      // En vez de hacer fetch por red, seteamos el JSON local directo en memoria
      const selectedData = newLang === "es" ? infoSpanish : infoEnglish;
      
      setData(selectedData);
      setError(null); // Limpiamos errores si los hubiera antes
    } catch (err) {
      setError("Error al cargar los datos locales del CV", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    changeLanguage(lang);
  }, [lang]);

  return (
    <CVcontext.Provider value={{ data, loading, error, lang, changeLanguage, translations }}>
      {children}
    </CVcontext.Provider>
  );
};

export const useCvData = () => useContext(CVcontext);
