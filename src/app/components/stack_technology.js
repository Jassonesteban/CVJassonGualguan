"use client";
import Image from "next/image";
import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["900", "300"],
});

export default function StackTechnology({ techs }) {
  const allItems = Object.values(techs).flat();
  const fallbackImages =
    "https://c0.klipartz.com/pngpicture/688/752/gratis-png-programacion-de-computadoras-iconos-de-computadora-programador-lenguaje-de-programacion-codificacion.png";

  const [imageSources, setImageSources] = useState(
    allItems.map((tech) => tech.logo || fallbackImages)
  );

  const handleImageError = (index) => {
    setImageSources((prev) => {
      const newSources = [...prev];
      newSources[index] = fallbackImages;
      return newSources;
    });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {allItems.map((tech, index) => {
        const imgSrc = imageSources[index] || fallbackImages;

        return (
          <div key={index} className="flex flex-col items-center">
            {imgSrc ? (
              <div className="w-20 h-20 flex justify-center items-center rounded-lg overflow-hidden mt-10">
                <Image
                  src={imgSrc}
                  alt={tech.nombre || "Tecnología"}
                  width={78}
                  height={78}
                  className="object-contain"
                  onError={() => handleImageError(index)}
                />
              </div>
            ) : null}
            <p
              className={`mt-3 font-normal text-center text-2xl ${poppins.className}`}
            >
              {tech.nombre}
            </p>
          </div>
        );
      })}
    </div>
  );
}
