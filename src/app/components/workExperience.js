"use client";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import {Roboto} from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['900', '300'],
});


export default function WorkExperience({ work }) {
  return (
    <section className="py-10 md:mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {work.map((job, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg border border-gray-200 transition-transform transform hover:scale-105"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-1xl font-semibold text-gray-800 flex items-center ${roboto.className}`}>
                <FaBriefcase className="mr-2 text-gray-600" size={24} />
                {job.Titulo}
              </h3>
              <span className="text-sm text-gray-500 font-normal">
                {job.Fecha_inicio} - {job.Fecha_fin}
              </span>
            </div>
            <div className="flex items-center text-gray-600 mb-2 font-normal">
              <FaMapMarkerAlt className="mr-2" />
              <p>{job.Ubicacion}</p>
            </div>
            <div className="flex items-center text-gray-600 mb-2 font-normal">
              <FaCalendarAlt className="mr-2" />
              <p>{job.Empresa}</p>
            </div>
            <p className="text-black mt-2">{job.Descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
