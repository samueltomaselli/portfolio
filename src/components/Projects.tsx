import { Fade } from "react-awesome-reveal";
import projeto1 from "../assets/projeto-1.png";
import projeto2 from "../assets/projeto-2.png";
import projeto3 from "../assets/projeto-3.png";
import projeto4 from "../assets/projeto-4.png";

export const Projects = () => {
  return (
    <div id="projects" className="projects dark:bg-primary-900 text-white flex flex-col items-center gap-24 pt-20 pb-20 z-10 max-sm:gap-16 max-sm:pt-10 max-sm:pb-10">
      <Fade delay={100} className="w-4/6 flex flex-col items-center">
        <h1 className="text-4xl font-bold dark:text-white text-primary-900 max-sm:text-3xl">Projetos ✍️</h1>
        <div className="w-full flex flex-col gap-16">
          <div className="grid grid-cols-3 gap-4 max-lg:flex flex-col">
            <div className="grid gap-4 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col">
              <div className="project-box-1 relative">
                <div className="absolute w-full h-full bg-gray-800/80 transition-opacity delay-150 opacity-0 z-10 rounded-xl border-2 dark:border-black hover:opacity-100 text-primary-100 font-bold text-xl flex flex-col justify-center items-center gap-6">
                  <a href="">Visitar site</a>
                  <a href="">Repositório</a>
                </div>
                <img src={projeto1} className="w-full h-full rounded-xl border-2 dark:border-black " alt="" />
              </div>
              <div className="project-box-2 relative">
                <div className="absolute w-full h-full bg-gray-800/80 transition-opacity delay-150 opacity-0 z-10 rounded-xl border-2 dark:border-black hover:opacity-100 text-primary-100 font-bold text-xl flex flex-col justify-center items-center gap-6">
                  <a href="">Visitar site</a>
                  <a href="">Repositório</a>
                </div>
                <img src={projeto3} className="w-full h-full rounded-xl border-2 dark:border-black " alt="" />
              </div>
            </div>
            <div className="grid gap-4 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col">
              <div className="project-box-2 relative">
                <div className="absolute w-full h-full bg-gray-800/80 transition-opacity delay-150 opacity-0 z-10 rounded-xl border-2 dark:border-black hover:opacity-100 text-primary-100 font-bold text-xl flex flex-col justify-center items-center gap-6">
                  <a href="">Visitar site</a>
                  <a href="">Repositório</a>
                </div>
                <img src={projeto2} alt="" className="w-full h-full rounded-xl border-2 dark:border-black  " />
              </div>
              <div className="project-box-1 relative">
                <div className="absolute w-full h-full bg-gray-800/80 transition-opacity delay-150 opacity-0 z-10 rounded-xl border-2 dark:border-black hover:opacity-100 text-primary-100 font-bold text-xl flex flex-col justify-center items-center gap-6">
                  <a href="">Visitar site</a>
                  <a href="">Repositório</a>
                </div>
                <img src={projeto4} alt="" className="w-full h-full rounded-xl border-2 dark:border-black  " />
              </div>
            </div>
            <div className="grid gap-4 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col">
              <div className="project-box-1 relative">
                <div className="absolute w-full h-full bg-gray-800/80 transition-opacity delay-150 opacity-0 z-10 rounded-xl border-2 dark:border-black hover:opacity-100 text-primary-100 font-bold text-xl flex flex-col justify-center items-center gap-6">
                  <a href="">Visitar site</a>
                  <a href="">Repositório</a>
                </div>
                <img src={projeto1} alt="" className="w-full h-full rounded-xl border-2 dark:border-black  " />
              </div>
              <div className="project-box-2 relative">
                <div className="absolute w-full h-full bg-gray-800/80 transition-opacity delay-150 opacity-0 z-10 rounded-xl border-2 dark:border-black hover:opacity-100 text-primary-100 font-bold text-xl flex flex-col justify-center items-center gap-6">
                  <a href="">Visitar site</a>
                  <a href="">Repositório</a>
                </div>
                <img src={projeto3} alt="" className="w-full h-full rounded-xl border-2 dark:border-black " />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};
