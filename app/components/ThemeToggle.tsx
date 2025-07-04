"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { assets } from "@/assets/assets";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="cursor-pointer"
      >
        <Image
          src={assets.sun_icon}
          alt="theme"
          className="w-6 hidden dark:block"
        />
        <Image src={assets.moon_icon} alt="theme" className="w-6 dark:hidden" />
      </button>
    </div>
  );
};

export default ThemeToggle;
