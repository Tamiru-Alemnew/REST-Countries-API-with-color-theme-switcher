"use client"
import { faMoon as faMoonRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Header() {

if (typeof window !== "undefined") {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

const handleDarkMode = () => {
  if (typeof window !== "undefined") {
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
        <FontAwesomeIcon icon={faMoonRegular} className="w-5 h-5" />
        Dark Mode
      </button>
    </div>
  );
}

export default Header