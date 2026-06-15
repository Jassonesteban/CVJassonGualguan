"use client";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCpu,
} from "react-icons/fa";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["900", "300"],
});

export default function ArtificialIntelligence({ ia }) {
  if (!ia || ia.length === 0) return null;

  return (
    // 🥼 Fondo claro impecable con un grid de fondo sutil tipo ingeniería
    <section className="py-14 md:mb-20 bg-gray-50/50 rounded-3xl my-6 border border-gray-200/60 shadow-sm relative overflow-hidden max-w-7xl mx-auto px-6">
      {/* 🧬 Decoración Clean-Tech: Un destello de luz cyan ultra-suave en el fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-[100px] pointer-events-none" />

      {/* 🚀 ENCABEZADO ESTILO LABORATORIO TECNOLÓGICO */}
      <div className="border-l-4 border-cyan-500 pl-4 mb-12 relative z-10">
        <div className="flex items-center gap-2">
          <FaCpu className="text-cyan-600 animate-pulse" size={14} />
          <span className="text-cyan-600 text-xs font-bold tracking-widest font-mono uppercase">
            Sistemas & Agentes Autónomos
          </span>
        </div>

        <h2
          className={`text-3xl font-extrabold text-gray-900 mt-1 tracking-tight ${roboto.className}`}
        >
          {ia[0].Empresa}
        </h2>

        <div className="flex flex-wrap gap-5 text-sm text-gray-500 mt-2 font-normal font-mono">
          <div className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="text-gray-400" />
            <span>Medellín, Colombia</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaCalendarAlt className="text-gray-400" />
            <span className="text-emerald-600 font-semibold">
              Enero 2025 - Actualmente
            </span>
          </div>
        </div>
      </div>

      {/* 🎛️ GRID DE PROYECTOS (Cards Claras estilo IA) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {ia.map((job, index) => {
          const tags = job["Pila tecnologica"]
            ? job["Pila tecnologica"].split(",").map((tag) => tag.trim())
            : [];

          return (
            <div
              key={index}
              // Estilo Clean Tech: Fondo blanco puro, bordes finos, y en hover un brillo cyan limpio con sombra flotante
              className="p-6 bg-white rounded-2xl border border-gray-200/80 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_10px_30px_rgba(6,182,212,0.08)] group"
            >
              <div>
                {/* Header de la Card estilo metadatos de consola */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold text-gray-400 font-mono tracking-widest uppercase">
                    {"// module_0"}
                    {index + 1}
                  </span>
                  {job.Actualmente === "true" && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                  )}
                </div>

                {/* Título del Proyecto */}
                <h3
                  className={`text-xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300 mb-3 leading-tight flex items-start ${roboto.className}`}
                >
                  <FaBriefcase
                    className="mr-2 text-cyan-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  {job.Titulo}
                </h3>

                {/* Descripción / Responsabilidad */}
                <p className="text-gray-600 text-sm text-justify leading-relaxed font-normal">
                  {job.Responsabilidad}
                </p>
              </div>

              {/* 🏷️ TAGS SEMI-TRANSPARENTES DE TECNOLOGÍA */}
              {tags.length > 0 && (
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-cyan-50/50 text-cyan-700 text-[11px] px-2.5 py-1 rounded-md border border-cyan-100 font-mono font-medium tracking-tight"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
