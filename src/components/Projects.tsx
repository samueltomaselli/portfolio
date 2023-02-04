import { Fade, Slide } from "react-awesome-reveal";
import { ProjectBox } from "./ProjectBox";
import projeto1 from "../assets/projeto-1.png";
import projeto2 from "../assets/projeto-2.png";
import projeto3 from "../assets/projeto-3.png";
import projeto4 from "../assets/projeto-4.png";
import projeto5 from "../assets/projeto-5.png";
import projeto6 from "../assets/projeto-6.png";
import { FaReact, FaGithub, FaCss3Alt, FaGitAlt, FaSass } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <div id="projects" className="dark:bg-primary-900 text-white flex flex-col items-center gap-24 pt-20 pb-20 z-10 max-sm:gap-16 max-sm:pt-10 max-sm:pb-10">
      <Fade delay={100} duration={1500} className="w-4/6 flex flex-col items-center max-sm:w-4/5">
        <h1 className="text-4xl font-bold dark:text-white text-primary-900 max-sm:text-3xl">{t("projects-title")}</h1>
        <div className="w-full flex flex-col gap-6">
          <Slide duration={1500} triggerOnce>
            <div className="grid grid-cols-3 gap-8 max-lg:flex flex-col">
              <div className="grid max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col ">
                <ProjectBox img={projeto1} title={"BBCharacters"} type={"vanilla"} height={"56"} />
                <ProjectBox img={projeto3} title={"LatestNews"} type={"react"} height={"64"} />
              </div>
              <div className="grid  max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col">
                <ProjectBox img={projeto2} title={"Hertel Advocacia"} type={"vanilla"} height={"64"} />
                <ProjectBox img={projeto4} title={"TakeNotes"} type={"react"} height={"56"} />
              </div>
              <div className="grid  max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col">
                <ProjectBox img={projeto6} title={"MoviesTDB"} type={"react"} height={"56"} />
                <ProjectBox img={projeto5} title={"WeatherWeb"} type={"react"} height={"64"} />
              </div>
            </div>
          </Slide>
        </div>
      </Fade>
    </div>
  );
};
