"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <motion.a
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          href="/."
          className="inline-block"
        >
          <Image
            src={assets.logo}
            alt="logo"
            className="w-40 mx-auto mb-2 dark:hidden"
          />
          <Image
            src={assets.logo_dark}
            alt="logo"
            className="w-40 mx-auto mb-2 hidden dark:block"
          />
        </motion.a>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={assets.mail_icon}
            alt="mail-icon"
            className="w-6 dark:hidden"
            width={24}
          />
          <Image
            src={assets.mail_icon_dark}
            alt="mail-icon"
            className="w-6 hidden dark:block"
            width={24}
          />
          denizgokbudak@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 gap-8">
        <p>© 2025 Deniz Gokbudak. All rights reserved. </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <motion.a
              target="_blank"
              href="https://github.com/hobaaaa"
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Github
            </motion.a>
          </li>
          <li>
            <motion.a
              target="_blank"
              href="https://www.linkedin.com/in/denizgokbudak/"
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Linkedin
            </motion.a>
          </li>
          <li>
            <motion.a
              target="_blank"
              href="https://www.instagram.com/gokbudakdeniz/"
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Instagram
            </motion.a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
