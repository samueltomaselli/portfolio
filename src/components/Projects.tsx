import { Fade, Slide } from "react-awesome-reveal";
import { ProjectBox } from "./ProjectBox";
import projeto2 from "../assets/projects/projeto-2.png";
import projeto3 from "../assets/projects/projeto-3.png";
import projeto4 from "../assets/projects/projeto-4.png";
import projeto5 from "../assets/projects/projeto-5.png";
import projeto6 from "../assets/projects/projeto-6.png";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <div id="projects" className="dark:bg-primary-900 text-white bg-white flex flex-col items-center gap-24 pt-20 pb-20 z-10 max-sm:gap-16 max-sm:pt-10 max-sm:pb-10">
      <Fade delay={100} duration={1500} className="w-4/6 max-w-5xl flex flex-col items-center max-sm:w-4/5">
        <h1 className="text-4xl font-bold dark:text-white text-primary-900 max-sm:text-3xl">{t("projects-title")}</h1>
        <div className="w-full rounded-xl flex flex-col justify-start items-start gap-24 dark:text-white text-primary-900 max-lg:flex-col">
          <Slide delay={100} duration={1500} triggerOnce>
            <ProjectBox img={projeto2} title={"Hertel Advocacia"} type={"vanilla"} reverse={true} urls={{ link: "https://www.hertel.com.br/" }}>
              {t("HertelAdvocacia-content")}
            </ProjectBox>
            <ProjectBox img={projeto3} title={"LatestNews"} type={"react"} urls={{ github: "https://github.com/samueltomaselli/LatestNews" }}>
              {t("LatestNews-content")}
            </ProjectBox>
            <ProjectBox
              img={projeto4}
              title={"TakeNotes"}
              type={"react"}
              reverse={true}
              urls={{ github: "https://github.com/samueltomaselli/TakeNotes", link: "https://take-notes-web.vercel.app/" }}
            >
              {t("TakeNotes-content")}
            </ProjectBox>
            <ProjectBox img={projeto6} title={"MoviesTDB"} type={"react"} urls={{ github: "https://github.com/samueltomaselli/MoviesDTB" }}>
              {t("MoviesTDB-content")}
            </ProjectBox>
            <ProjectBox img={projeto5} title={"WeatherWeb"} type={"react"} reverse={true} urls={{ github: "https://github.com/samueltomaselli/WeatherWeb" }}>
              {t("WeatherWeb-content")}
            </ProjectBox>
          </Slide>
        </div>
      </Fade>
    </div>
  );
};
