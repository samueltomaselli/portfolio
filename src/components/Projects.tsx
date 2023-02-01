import { Fade, Slide } from "react-awesome-reveal";
import { ProjectBox1 } from "./ProjectBox1";
import { ProjectBox2 } from "./ProjectBox2";
import projeto1 from "../assets/projeto-1.png";
import projeto2 from "../assets/projeto-2.png";
import projeto3 from "../assets/projeto-3.png";
import projeto4 from "../assets/projeto-4.png";
import projeto5 from "../assets/projeto-5.png";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <div id="projects" className="dark:bg-primary-900 text-white flex flex-col items-center gap-24 pt-20 pb-20 z-10 max-sm:gap-16 max-sm:pt-10 max-sm:pb-10">
      <Fade delay={100} duration={1500} className="w-4/6 flex flex-col items-center max-sm:w-4/5">
        <h1 className="text-4xl font-bold dark:text-white text-primary-900 max-sm:text-3xl">{t("projects-title")}</h1>
        <div className="w-full flex flex-col gap-16">
          <Slide duration={1500} triggerOnce>
            <div className="grid grid-cols-3 gap-4 max-lg:flex flex-col">
              <div className="grid gap-4 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col">
                <ProjectBox1 url={projeto1} />
                <ProjectBox2 url={projeto3} />
              </div>
              <div className="grid gap-4 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col">
                <ProjectBox2 url={projeto2} />
                <ProjectBox1 url={projeto4} />
              </div>
              <div className="grid gap-4 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col">
                <ProjectBox1 url={projeto5} />
                <ProjectBox2 url={projeto4} />
              </div>
            </div>
          </Slide>
        </div>
      </Fade>
    </div>
  );
};
