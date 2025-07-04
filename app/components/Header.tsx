import { assets } from "@/assets/assets";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="profile-img"
          className="rounded-full w-32 md:mt-22"
        />
      </div>
      <h3 className="flex items-center gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I&apos;m Deniz Gökbudak
        <Image src={assets.hand_icon} alt="hand-icon" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        Frontend Developer based in Turkey
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        I am a frontend developer living in Denizli, Turkey and I have been
        working freelance for 2 years. I am open to opportunities.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="flex items-center gap-2 border-2 py-4 px-8 rounded-full mt-5 bg-black dark:bg-background text-white"
        >
          contact with me
          <Image
            src={assets.right_arrow_white}
            alt="right-arrow-white"
            className="w-4"
          />
        </a>
        <a
          href="/sample-resume.pdf"
          className="flex items-center gap-2 border-2 py-4 px-8 rounded-full mt-5 dark:bg-white dark:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          my resume
          <Image
            src={assets.download_icon}
            alt="download-icon"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
