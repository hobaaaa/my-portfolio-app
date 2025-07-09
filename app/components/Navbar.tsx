"use client";
import Image from "next/image";
import { assets } from "../../assets/assets";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "motion/react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[%8] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-background/50 backdrop-blur-lg shadow-person" : ""
        } duration-200`}
      >
        <motion.a
          href="/."
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={assets.logo}
            alt="logo"
            className="w-36 cursor-pointer lg:mr-14 dark:hidden"
          />
          <Image
            src={assets.logo_dark}
            alt="logo"
            className="w-36 cursor-pointer lg:mr-14 hidden dark:block"
          />
        </motion.a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-10 rounded-full py-3 px-12 ${
            isScroll ? "" : "bg-background/50 shadow-person"
          } duration-200`}
          ref={sideMenuRef}
        >
          <motion.li
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a className="font-ovo" href="/.">
              Home
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a className="font-ovo" href="#about">
              About
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a className="font-ovo" href="#services">
              Services
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a className="font-ovo" href="#work">
              My Work
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a className="font-ovo" href="#contact">
              Contact Me
            </a>
          </motion.li>
        </ul>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              alt="mail"
              className="w-3 dark:hidden"
            />
            <Image
              src={assets.arrow_icon_dark}
              alt="mail"
              className="w-3 hidden dark:block"
            />
          </motion.a>

          <button className="cursor-pointer block md:hidden ml-3">
            <Image
              src={assets.menu_white}
              alt="menu-icon"
              className="w-6 hidden dark:block"
              onClick={openMenu}
            />
            <Image
              src={assets.menu_black}
              alt="menu-icon"
              className="w-6 dark:hidden"
              onClick={openMenu}
            />
          </button>
        </div>
        {/* MOBILE MENU */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-mobil-background transition duration-500 "
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={assets.close_white}
              alt="close-menu"
              className="w-5 cursor-pointer hidden dark:block"
            />
            <Image
              src={assets.close_black}
              alt="close-menu"
              className="w-5 cursor-pointer dark:hidden"
            />
          </div>

          <li>
            <a className="font-ovo" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
