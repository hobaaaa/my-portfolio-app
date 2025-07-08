"use client";
import { assets, workData } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const Work = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setActiveCard((prev) => (prev === index ? null : index));
    }
  };

  return (
    <motion.div
      id="work"
      className=" w-full px-[12%] py-10 scroll-mt-20 "
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
        My portfolio
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My latest works
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto font-ovo text-center mt-5 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </motion.p>
      <motion.div
        className="grid grid-cols-auto gap-6 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            onClick={() => handleCardClick(index)}
            className="aspect-2/3 bg-cover bg-no-repeat bg-center rounded-lg relative cursor-pointer group flex items-center justify-center "
            style={{ backgroundImage: `url(${project.bgImage})` }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`absolute left-1/2 transition-all duration-500 -translate-x-1/2 -translate-y-1/2
              w-10/12 bg-white py-3 px-5 rounded-md flex items-center justify-between z-10
              top-1/2 group-hover:top-[85%] md:group-hover:top-[85%]
              ${activeCard === index ? "top-[85%]" : "top-1/2"}
            `}
            >
              <div>
                <h3 className="font-semibold text-black">{project.title}</h3>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition duration-500">
                <Image src={assets.send_icon} alt="send-icon" className="w-5" />
              </div>
            </div>
            <motion.a
              href={`/projects/${project.slug}`}
              className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto my-20 hover:bg-light-hover duration-500  dark:border-gray-300 hover:bg-hover dark:hover:text-white bg-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              Show more{" "}
              <Image
                src={assets.right_arrow_bold}
                alt="right-arrow"
                className="w-4"
              />
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
