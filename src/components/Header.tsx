import { useScrollDirection } from "../hooks/useScrollDirection";
import { Switcher } from "./Switcher";
import { Link } from "react-scroll";
import { MenuMobile } from "./MenuMobile";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export const Header = () => {
  const scrollDirection = useScrollDirection();
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <>
      {menu && (
        <div className="flex justify-center items-center flex-col bg-gray-900 fixed z-50 right-0 top-0 h-screen w-full text-black opacity-95">
          <div className="absolute right-12 top-10 text-white">
            <button onClick={() => setMenu(!menu)}>
              <AiFillCloseCircle className="text-5xl" />
            </button>
          </div>
          <nav className="font-primary text-white opacity-100 flex flex-col items-center justify-center gap-10 text-3xl font-bold">
            <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="cursor-pointer hover:text-primary-100" onClick={() => setMenu(!menu)}>
              Home
            </Link>
            <Link to="about" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-primary-100" onClick={() => setMenu(!menu)}>
              About
            </Link>
            <Link to="skills" spy={false} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-primary-100" onClick={() => setMenu(!menu)}>
              Skills
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-primary-100" onClick={() => setMenu(!menu)}>
              Projects
            </Link>
            <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-primary-100" onClick={() => setMenu(!menu)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
      <div className={`sticky  ${scrollDirection === "down" ? "-top-24" : "top-0"} h-24 flex justify-center items-center transition-all duration-500 bg-transparent z-40`}>
        <div className="w-4/6 h-16 dark:bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm dark:bg-opacity-10 bg-opacity-10 border-2 border-primary-100 dark:border-primary-100 dark:shadow-primary-100/40 shadow-primary-100/20 shadow-lg flex justify-between items-center py-4 px-6 rounded-2xl mt-8 max-sm:w-5/6 ">
          <a href="" className="font-bold text-2xl text-primary-100 max-sm:text-xl ">
            Portfolio
          </a>
          <nav className="font-primary flex gap-10 text-lg uppercase font-bold text-gray-800 dark:text-white max-2xl:hidden">
            <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="cursor-pointer hover:text-primary-100">
              Home
            </Link>
            <Link to="about" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-primary-100">
              About
            </Link>
            <Link to="skills" spy={false} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-primary-100">
              Skills
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-primary-100">
              Projects
            </Link>
            <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-primary-100">
              Contact
            </Link>
          </nav>
          <div className="flex gap-10 max-sm:gap-5 justify-center items-center">
            <Switcher />
            <MenuMobile menu={menu} setMenu={setMenu} />
          </div>
        </div>
      </div>
    </>
  );
};
