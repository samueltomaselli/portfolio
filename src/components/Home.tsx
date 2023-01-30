import { Fade } from "react-awesome-reveal";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import avatar3 from "../assets/avatar3.png";

export const Home = () => {
  return (
    <div id="home" className="w-full bg-white dark:bg-primary-900 dark:text-primary-100 text-primary-100 z-10 pb-20 max-sm:gap-20 max-sm:pb-10">
      <Fade delay={100} className="flex justify-center">
        <div className="w-4/6 flex justify-between items-center max-md:flex-col max-md:justify-center max-lg:gap-12 max-sm:w-11/12">
          <div className="w-2/3 flex flex-col gap-4">
            <h1 className="text-4xl font-bold dark:text-white text-primary-900 mt-10 flex flex-col gap-2">
              Olá 👋, me chamo
              <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-800"> Samuel Tomaselli </span>
            </h1>
            <h3 className="text-2xl font-bold mb-3">Desenvolvedor Front-end</h3>
            <div className="flex gap-4 mb-2">
              <a href="" className="p-4 border-2 border-primary-100 dark:border-primarytext-primary-100 text-primary  dark:text-white font-extrabold rounded-lg hover:scale-105">
                Explorar projetos
              </a>
              <a
                href=""
                className="p-4 border-2 bg-primary-100 dark:bg-primary-100 border-primary-100 dark:border-primary-100 text-white font-extrabold rounded-lg hover:scale-105"
              >
                Download CV
              </a>
            </div>
            <div className="flex gap-5">
              <a href="https://github.com/szcore">
                <AiFillGithub className="text-4xl hover:scale-125" />
              </a>
              <a href="https://www.linkedin.com/in/samuel-tomaselli-637924224/">
                <AiFillLinkedin className="text-4xl hover:scale-125" />
              </a>
              <a href="https://www.instagram.com/samuca_tomaselli/">
                <AiFillInstagram className="text-4xl hover:scale-125" />
              </a>
            </div>
          </div>
          <img src={avatar3} alt="" className="h-[400px] max-md:h-2/6" />
        </div>
      </Fade>
    </div>
  );
};
