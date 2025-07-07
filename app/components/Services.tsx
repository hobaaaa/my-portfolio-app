"use client";
import { assets, serviceData } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";

const Services = () => {
  return (
    <motion.div
      id="services"
      className=" w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        What i offers
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My services
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto font-ovo text-center mt-5 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </motion.p>
      <motion.div
        className="grid grid-cols-auto gap-6 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-light-hover hover:-translate-y-1 hover:bg-hover hover-shadow duration-500"
            whileHover={{ scale: 1.05 }}
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="text-lg my-4 font-semibold text-gray-700 dark:text-gray-200">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-5">
              {description}
            </p>
            <a href={link} className="flex items-center text-sm gap-2 mt-5">
              Read more
              <Image
                src={assets.right_arrow}
                alt="right-arrow"
                className="w-4"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
