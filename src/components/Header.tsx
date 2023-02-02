import { useScrollDirection } from "../hooks/useScrollDirection";
import { Switcher } from "./Switcher";
import { Link } from "react-scroll";
import { MenuMobile } from "./MenuMobile";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";
import { LangSwitcher } from "./LangSwitcher";
import { useTranslation } from "react-i18next";
import { FaCode } from "react-icons/fa";

export const Header = () => {
  const scrollDirection = useScrollDirection();
  const [menu, setMenu] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <>
      {menu && (
        <div className="flex justify-center items-center flex-col bg-gray-900 fixed z-50 right-0 top-0 h-screen w-full text-black opacity-95">
          <Fade delay={150} duration={1500}>
            <div className="absolute right-7 top-7 text-white">
              <button onClick={() => setMenu(!menu)}>
                <AiFillCloseCircle className="text-5xl" />
              </button>
            </div>
            <nav className="font-primary text-white opacity-100 flex flex-col items-center justify-center gap-10 text-3xl font-bold">
              <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="cursor-pointer hover:text-primary-100" onClick={() => setMenu(!menu)}>
                {t("header-home")}
              </Link>
              <Link to="about" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-primary-100" onClick={() => setMenu(!menu)}>
                {t("header-about")}
              </Link>
              <Link to="skills" spy={false} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-primary-100" onClick={() => setMenu(!menu)}>
                {t("header-skills")}
              </Link>
              <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-primary-100" onClick={() => setMenu(!menu)}>
                {t("header-projects")}
              </Link>
              <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-primary-100" onClick={() => setMenu(!menu)}>
                {t("header-contact")}
              </Link>
            </nav>
            <div className="absolute right-7 bottom-7 text-white min-[330px]:hidden flex items-center justify-center">
              <LangSwitcher />
            </div>
          </Fade>
        </div>
      )}
      <div className={`sticky  ${scrollDirection === "down" ? "-top-24" : "top-0"} h-24 flex justify-center items-center transition-all duration-500 bg-transparent z-40`}>
        <div className="w-4/6 h-16 dark:bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm dark:bg-opacity-10 bg-opacity-10 border-2 border-primary-100 dark:border-primary-100 dark:shadow-primary-100/40 shadow-primary-100/20 shadow-lg flex justify-between items-center py-4 px-6 rounded-2xl mt-8 max-sm:w-5/6 ">
          <a href="" className="font-extrabold text-3xl rounded-lg border-primary-100 flex items-center gap-1">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-800">ST</h1>
            <FaCode className="text-primary-800" />
          </a>
          <nav className="font-primary flex gap-10 text-lg uppercase font-bold text-gray-800 dark:text-white max-2xl:hidden">
            <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="cursor-pointer hover:text-primary-100 hover:scale-105 transition-all">
              {t("header-home")}
            </Link>
            <Link to="about" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-primary-100 hover:scale-105 transition-all">
              {t("header-about")}
            </Link>
            <Link to="skills" spy={false} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-primary-100 hover:scale-105 transition-all">
              {t("header-skills")}
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-primary-100 hover:scale-105 transition-all">
              {t("header-projects")}
            </Link>
            <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-primary-100 hover:scale-105 transition-all">
              {t("header-contact")}
            </Link>
          </nav>
          <div className="flex gap-10 max-sm:gap-5 justify-center items-center">
            <div className="max-[330px]:hidden flex items-center justify-center">
              <LangSwitcher />
            </div>
            <Switcher />
            <MenuMobile menu={menu} setMenu={setMenu} />
          </div>
        </div>
      </div>
    </>
  );
};
