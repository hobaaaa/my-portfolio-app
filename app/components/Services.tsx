import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className=" w-full px-[12%] py-10 scroll-mt-20 ">
      <h4 className="text-center mb-2 text-lg font-ovo">What i offers</h4>
      <h2 className="text-center text-5xl font-ovo">My services</h2>
      <p className="max-w-2xl mx-auto font-ovo text-center mt-5 mb-12">
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>
      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-light-hover hover:-translate-y-1 hover:bg-hover hover-shadow duration-500 "
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
