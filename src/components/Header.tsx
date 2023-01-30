import { useScrollDirection } from "../hooks/useScrollDirection";
import { Switcher } from "./Switcher";
import { Link } from "react-scroll";
import { MenuMobile } from "./MenuMobile";

export const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <div className={`sticky  ${scrollDirection === "down" ? "-top-24" : "top-0"} h-24 flex justify-center items-center transition-all duration-500 bg-transparent z-50`}>
      <div className="w-4/6 h-16 dark:bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm dark:bg-opacity-10 bg-opacity-10 border-2 border-primary-100 dark:border-primary-100 dark:shadow-primary-100/40 shadow-primary-100/20 shadow-lg flex justify-between items-center py-4 px-6 rounded-2xl mt-8 ">
        <a href="" className="font-bold text-2xl text-primary-100 max-sm:text-xl ">
          Portfolio
        </a>
        <nav className="font-primary flex gap-10 text-lg uppercase font-bold text-gray-800 dark:text-white max-2xl:hidden">
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="cursor-pointer hover:text-primary-100">
            Home
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-primary-100">
            Sobre mim
          </Link>
          <Link to="skills" spy={false} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-primary-100">
            Habilidades
          </Link>
          <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-primary-100">
            Projetos
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-primary-100">
            Contato
          </Link>
        </nav>
        <div className="flex gap-10">
          <Switcher />
          <MenuMobile />
        </div>
      </div>
    </div>
  );
};
