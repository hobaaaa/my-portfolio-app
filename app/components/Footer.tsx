"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center px-[12%]">
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
        <div className="flex flex-wrap items-center justify-center gap-6 w-full">
          <div className="w-max flex items-center gap-2 mx-auto">
            <Image
              src={assets.phone_icon}
              alt="phone_icon"
              className="w-6 dark:hidden"
              width={24}
            />
            <Image
              src={assets.phone_icon_dark}
              alt="phone_icon_dark"
              className="w-6 hidden dark:block"
              width={24}
            />
            <a href="tel:+905536662353">+90 553 666 23 53</a>
          </div>
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
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={assets.location_icon}
            alt="location_icon"
            className="w-6 dark:hidden"
            width={24}
          />
          <Image
            src={assets.location_icon_dark}
            alt="location_icon_dark"
            className="w-6 hidden dark:block"
            width={24}
          />
          Değirmenönü mh. 1739 sk. NO:18 Daire:7 Merkezefendi/Denizli
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[12%] mt-12 py-6 gap-8">
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
