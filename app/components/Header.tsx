"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
      >
        <Image
          src={assets.profile_img}
          alt="profile-img"
          className="rounded-full w-32 md:mt-22"
        />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center gap-2 text-xl md:text-2xl mb-3 font-ovo"
      >
        Hi! I&apos;m Deniz Gökbudak
        <Image src={assets.hand_icon} alt="hand-icon" className="w-6" />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
      >
        Frontend Developer based in Turkey
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="max-w-2xl mx-auto font-ovo"
      >
        I am a frontend developer living in Denizli, Turkey and I have been
        working freelance for 2 years. I am open to opportunities.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="flex items-center gap-2 border-2 py-4 px-8 rounded-full mt-5 bg-black dark:bg-background text-white hover:bg-gray-800  hover dark:hover:bg-hover duration-500"
          >
            contact with me
            <Image
              src={assets.right_arrow_white}
              alt="right-arrow-white"
              className="w-4"
            />
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/sample-resume.pdf"
            className="flex items-center gap-2 border-2 py-4 px-8 rounded-full mt-5 dark:bg-white dark:text-black hover:bg-gray-400 dark:hover:bg-gray-200 duration-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            my resume
            <Image
              src={assets.download_icon}
              alt="download-icon"
              className="w-4"
            />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
