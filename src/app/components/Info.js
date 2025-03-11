"use client";
import { useCvData } from "../context/CVcontext";
import {Roboto} from 'next/font/google';
import Image from "next/image";
import StackTechnology from "./stack_technology";
import WorkExperience from "./workExperience";
import { motion } from "framer-motion";
import Footer from "./Footer";


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['900', '300'],
});


export default function Info() {
  const { data, loading, error, lang, translations} = useCvData();

  if (loading) return <p className="text-black">Cargando...</p>;
  if (error) return <p className="text-red-500"> Hubo un error: {error}</p>;

  return (
    <>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between mt-4">
        <motion.div className="flex flex-col space-y-4 max-w-full md:max-w-[50%]" 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}>
            <h2 className={`text-8xl font-extrabold text-left ${roboto.className}`}>{translations[lang].hello}</h2>
            <p className={`text-2xl font-normal text-gray text-justify ${roboto.className}`}>
                {data["Perfil profesional"].Descripcion}
            </p>
        </motion.div>

        <motion.div className="relative w-56 h-56 md:w-56 md:h-56 lg:w-84 lg:h-84 mb-10" 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}>
          <Image
            src="https://almacenamientojson.blob.core.windows.net/imgs/img-profile-three-removebg-preview.png"
            alt="profile-pic"
            fill
            className="object-contain rounded-lg"
          />
        </motion.div>
      </section>


      <section className="mt-20">
        <h1 className={`text-5xl text-left mb-10 md:text-3xl ${roboto.className}`}>{translations[lang].pila_tecnologica}</h1>
        <StackTechnology techs={data["habilidades_tecnicas"]}/>
        <h5 className="text-2xl text-gray mt-5 mb-5">{translations[lang].mas}</h5>
      </section>
      <section className="mt-20">
      <h1 className={`text-5xl text-left mb-10 ${roboto.className}`}>{translations[lang].experiencia}</h1>
        <WorkExperience work={data["Experiencia profesional"]}/>
      </section>
      <section className="mt-20">
        <Footer vitalInfo={data} />
      </section>
    </>
  );
}
