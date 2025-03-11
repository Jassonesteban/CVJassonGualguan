"use client";
import { useState, useEffect } from "react";
import { BsSun, BsMoon, BsGlobe } from "react-icons/bs";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "900",
});

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="w-full bg-transparent px-8 py-4 flex justify-between items-center z-10 dark:bg-gray-900 transition">
      <h1
        className={`text-6xl font-bold text-black dark:text-white tracking-widest ${montserrat.className}`}
      >
        JG
      </h1>
      <div className="flex space-x-4">
        <button className="w-12 h-12 flex items-center justify-center text-black dark:text-white border border-transparent hover:border-white dark:hover:border-white rounded-lg transition">
          <BsGlobe size={24} />
        </button>
        <button
          onClick={toggleTheme}
          className="w-12 h-12 flex items-center justify-center text-black dark:text-white border border-transparent hover:border-white dark:hover:border-white rounded-lg transition"
        >
          {theme === "dark" ? <BsSun size={34} /> : <BsMoon size={34} />}
        </button>
      </div>
    </nav>
  );
}
