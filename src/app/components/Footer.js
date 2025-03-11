"use client";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useCvData } from "../context/CVcontext";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["900", "300"],
});

export default function Footer({ vitalInfo }) {

    const { lang, translations} = useCvData();

  return (
    <footer
      className="w-full bg-black text-white px-8 py-6 mt-20 sm:mt-5 mb-10"
      style={{
        position: "absolute",
        bottom: "0",
        left: "0",
        top: "97%",
        height: "12%",
      }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center">
        {/* Sección de contacto */}
        <div className="space-y-2 lg:space-y-0 lg:w-1/3">
          <h4 className={`font-semibold text-3xl mb-10 ${roboto.className}`}>
            {translations[lang].footer.titulo_tres}
          </h4>
          <div className="space-y-1">
            <div className="flex items-center mb-3">
              <FaPhoneAlt className="mr-2" size={20} />
              <span>{translations[lang].footer.subtitulo_tres} </span>
              <a
                href={`https://wa.me/${vitalInfo.Telefono.replace(/\D/g, "")}`}
                className="text-blue-400 hover:underline ml-3"
              >
                {vitalInfo.Telefono}
              </a>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" size={20} />
              <span>Email: </span>
              <a
                href={`mailto:${vitalInfo.Email}`}
                className="text-blue-400 hover:underline ml-3"
              >
                {vitalInfo.Email}
              </a>
            </div>
          </div>
        </div>

        {/* Sección de redes sociales */}
        <div className="space-y-2 lg:space-y-0 lg:w-1/3 mt-4 lg:mt-0">
          <h4 className="font-semibold text-lg mb-3 mt-5">{translations[lang].footer.titulo_uno}</h4>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center">
              <FaLinkedin className="mr-2" size={20} />
              <a
                href={vitalInfo.URL_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <FaGithub className="mr-2" size={20} />
              <a
                href={vitalInfo.URL_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
            <div className="flex items-center">
              <FaInstagram className="mr-2" size={20} />
              <a
                href="https://www.instagram.com/jasson_esteban/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Sección de documentos */}
        <div className="space-y-2 lg:w-1/3 mt-4 lg:mt-0">
          <h4 className="font-semibold text-lg">{translations[lang].footer.titulo_dos}</h4>
          <div className="flex items-center">
            <a
              href="https://almacenamientojson.blob.core.windows.net/pdffiles/CV Jasson Gualguan 2025.pdf"
              target="_blank"
              className="ml-2 text-blue-400 hover:underline"
            >
              {translations[lang].footer.subtitulo_uno}
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="https://almacenamientojson.blob.core.windows.net/pdffiles/CV Jasson Gualguan 2025 english.pdf"
              target="_blank"
              className="ml-2 text-blue-400 hover:underline"
            >
              {translations[lang].footer.subtitulo_dos}
            </a>
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <div className="mt-8 text-center text-sm font-normal text-2xl">
        <p>
          &copy; {new Date().getFullYear()} Jasson Gualguan. {translations[lang].footer.copyright}
        </p>
      </div>
    </footer>
  );
}
