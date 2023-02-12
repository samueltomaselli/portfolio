import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { Link } from "react-scroll";
import cv from "../assets/cv/cv.pdf";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div
      id="home"
      className="min-h-[calc(100vh-96px)] flex justify-center items-center w-full bg-white dark:bg-primary-900 dark:text-primary-100 text-primary-100 z-10 max-sm:gap-20 "
    >
      <Fade delay={100} duration={1500} className="flex justify-center w-full">
        <div className="w-4/5 max-w-5xl flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold dark:text-white text-primary-900 mb-5 flex flex-col gap-2 items-center justify-center text-center max-lg:text-3xl">
            {t("home-title")}
            <span className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-800 text-center max-lg:text-5xl">
              Samuel Tomaselli
            </span>
          </h1>
          <h3 className="text-4xl font-bold mb-10 text-center max-lg:text-2xl">{t("home-subtitle")}</h3>
          <div className="flex gap-10 mb-10 text-xl max-lg:text-lg max-sm:gap-5">
            <Link
              to="projects"
              spy={false}
              smooth={true}
              offset={-50}
              duration={500}
              className="hover:cursor-pointer p-7 border-2 border-primary-100 dark:border-primary text-primary-100 dark:text-white font-extrabold rounded-lg hover:scale-105 transition-all max-lg:p-4 text-center"
            >
              {t("home-button-1")}
            </Link>
            <a
              href={cv}
              download
              className="p-7 border-2 bg-primary-100 dark:bg-primary-100 border-primary-100 dark:border-primary-100 text-white font-extrabold rounded-lg hover:scale-105 transition-all max-lg:p-4 text-center"
            >
              {t("home-button-2")}
            </a>
          </div>
          <div className="flex gap-5">
            <a href="https://github.com/samueltomaselli">
              <AiFillGithub className="text-5xl hover:scale-125 transition-all" />
            </a>
            <a href="https://www.linkedin.com/in/samuel-tomaselli-637924224/">
              <AiFillLinkedin className="text-5xl hover:scale-125 transition-all" />
            </a>
            <a href="https://www.instagram.com/samuca_tomaselli/">
              <AiFillInstagram className="text-5xl hover:scale-125 transition-all" />
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};
