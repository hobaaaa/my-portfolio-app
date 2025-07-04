"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={assets.logo}
          alt="logo"
          className="w-36 mx-auto mb-2 dark:hidden"
        />
        <Image
          src={assets.logo_dark}
          alt="logo"
          className="w-36 mx-auto mb-2 hidden dark:block"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={assets.mail_icon}
            alt="mail-icon"
            className="w-6"
            width={24}
          />
          denizgokbudak@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 gap-8">
        <p>© 2025 Deniz Gokbudak. All rights reserved. </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/hobaaaa">
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/denizgokbudak/"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/gokbudakdeniz/">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
