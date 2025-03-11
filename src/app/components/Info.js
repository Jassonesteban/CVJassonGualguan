"use client";
import { useCvData } from "../context/CVcontext";
import {Roboto} from 'next/font/google';
import Image from "next/image";
import StackTechnology from "./stack_technology";
import WorkExperience from "./workExperience";
import Footer from "./Footer";


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['900', '300'],
});


export default function Info() {
  const { data, loading, error } = useCvData();

  if (loading) return <p className="text-black">Cargando...</p>;
  if (error) return <p className="text-red-500"> Hubo un error: {error}</p>;

  return (
    <>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between mt-4">
        <div className="flex flex-col space-y-4 max-w-full md:max-w-[50%]">
          <h2 className={`text-8xl font-extrabold text-left ${roboto.className}`}>HOLA!</h2>
          <p className={`text-2xl font-normal text-gray text-justify ${roboto.className}`}>
            {data["Perfil profesional"].Descripcion}
          </p>
        </div>
        <div className="relative w-56 h-56 md:w-56 md:h-56 lg:w-84 lg:h-84 mb-10">
          <Image
            src="https://almacenamientojson.blob.core.windows.net/imgs/img-profile-three.jpeg"
            alt="profile-pic"
            fill
            className="object-contain rounded-lg"
          />
        </div>
      </section>


      <section className="mt-20">
        <h1 className={`text-5xl text-left mb-10 md:text-3xl ${roboto.className}`}>Pila tecnologica:</h1>
        <StackTechnology techs={data["habilidades_tecnicas"]}/>
        <h5 className="text-2xl text-gray mt-5 mb-5">y, aún hay más.</h5>
      </section>
      <section className="mt-20">
      <h1 className={`text-5xl text-left mb-10 ${roboto.className}`}>Experiencia laboral:</h1>
        <WorkExperience work={data["Experiencia profesional"]}/>
      </section>
      <section className="mt-20">
        <Footer vitalInfo={data} />
      </section>
    </>
  );
}
