"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize(); // Verificar al cargar
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#ffffff" },
        particles: {
          number: { value: isMobile ? 50 : 90 },
          color: { value: "#ffffff" },
          shape: { type: "triangle" },
          opacity: { value: 0.5 },
          size: { value: isMobile ? 3 : 4 },
          move: { enable: true, speed: 2 },
          links: { enable: true, color: "#a29e9e", distance: isMobile ? 100 : 150, width: 2 },
        },
      }}
    />
  );
}
