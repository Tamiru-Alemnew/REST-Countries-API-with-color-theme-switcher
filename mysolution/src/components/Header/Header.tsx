"use client"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const handleDarkMode = () => {
    if (typeof window !== "undefined") {
      setDarkMode(!darkMode);
      document.documentElement.classList.toggle("dark");
    }
  };

  return (
    <div className=" text-sm md:text-lg z-20 sticky top-0 bg-white dark:bg-gray-600 dark:text-gray-200 flex justify-between shadow-md p-4  px-12">
      <h1 className="font-semibold">Where in the world?</h1>
      <button
        className="flex items-center gap-2 font-semibold"
        onClick={handleDarkMode}
      >
        <FontAwesomeIcon
          icon={darkMode ? faSun : faMoon}
          className="w-5 h-5"
        />
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Header;
