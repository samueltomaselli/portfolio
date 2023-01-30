import { Fade } from "react-awesome-reveal";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import avatar3 from "../assets/avatar3.png";

export const Home = () => {
  return (
    <div id="home" className="w-full bg-white dark:bg-primary-900 dark:text-primary-100 text-primary-100 z-10 pb-20 pt-20 max-sm:gap-20 max-sm:pb-10 max-lg:pt-10 ">
      <Fade delay={100} className="flex justify-center">
        <div className="w-2/3 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-6xl font-bold dark:text-white text-primary-900 mt-10 flex flex-col gap-2 items-center justify-center text-center max-lg:text-3xl">
            Olá 👋, me chamo
            <span className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-800 text-center max-lg:text-5xl">
              Samuel Tomaselli
            </span>
          </h1>
          <h3 className="text-4xl font-bold mb-3 text-center max-lg:text-3xl">Desenvolvedor Front-end</h3>
          <div className="flex gap-10 mb-2 text-xl max-lg:text-lg max-sm:gap-5">
            <a
              href=""
              className=" p-7 border-2 border-primary-100 dark:border-primarytext-primary-100 text-primary dark:text-white font-extrabold rounded-lg hover:scale-105 max-lg:p-4 text-center"
            >
              Explorar projetos
            </a>
            <a
              href=""
              className="p-7 border-2 bg-primary-100 dark:bg-primary-100 border-primary-100 dark:border-primary-100 text-white font-extrabold rounded-lg hover:scale-105 max-lg:p-4 text-center"
            >
              Download CV
            </a>
          </div>
          <div className="flex gap-5">
            <a href="https://github.com/szcore">
              <AiFillGithub className="text-5xl hover:scale-125" />
            </a>
            <a href="https://www.linkedin.com/in/samuel-tomaselli-637924224/">
              <AiFillLinkedin className="text-5xl hover:scale-125" />
            </a>
            <a href="https://www.instagram.com/samuca_tomaselli/">
              <AiFillInstagram className="text-5xl hover:scale-125" />
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};
