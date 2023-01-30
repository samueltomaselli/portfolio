import { Fade } from "react-awesome-reveal";
import photo from "../assets/about-photo.png";
import photo2 from "../assets/about-photo2.png";

export const About = () => {
  return (
    <div id="about" className="dark:bg-primary-900 text-white flex flex-col items-center gap-24 pt-20 pb-20 z-10 max-sm:gap-20 max-sm:pt-10 max-sm:pb-10">
      <Fade delay={100} className="w-4/6 flex flex-col items-center ">
        <h1 className="text-4xl font-bold dark:text-white text-primary-900">Sobre mim ✌️</h1>
        <div className="full rounded-xl flex items-center gap-16 dark:text-white text-primary-900 max-lg:flex-col">
          <div className="w-3/5 font-bold flex flex-col gap-5 max-lg:w-full">
            <h2 className="text-3xl text-primary-100 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-800">Samuel Henrique Tomaselli</h2>
            <p className="text-lg dark:text-white text-start font-medium tracking-widest first-line:tracking-widest first-letter:text-5xl first-letter:font-bold dark:first-letter:text-white first-letter:text-black first-letter:mr-3 first-letter:float-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quo odit aliquid fuga dolores omnis alias iste sint quia quibusdam quidem nulla natus voluptate,
              assumenda hic sequi reprehenderit laboriosam et?
            </p>
            <p className="text-lg dark:text-white text-start font-medium tracking-widest ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis debitis nostrum sapiente quibusdam id vero dolor assumenda consequatur nemo, voluptate, quasi
              possimus, quaerat repellat. Laborum nihil corporis cupiditate hic nostrum.
            </p>
          </div>
          <div className="flex gap-4 filter drop-shadow-2xl drop-shadow-white max-lg:flex-col">
            <div className=" cursor-pointer h-fit border-2 border-primary-100 shadow-md shadow-primary-100 rounded-xl hover:scale-105">
              <img src={photo2} alt="" className="w-full h-80 rounded-xl grayscale transition delay-150 hover:grayscale-0" />
            </div>
            <div className="cursor-pointer h-fit border-2 border-primary-100 shadow-md shadow-primary-100 rounded-xl hover:scale-105">
              <img src={photo} alt="" className="w-full h-72 rounded-xl grayscale transition delay-150 hover:grayscale-0 " />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};
