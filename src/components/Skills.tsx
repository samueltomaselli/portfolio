import { Fade, Slide } from "react-awesome-reveal";
import { FaReact, FaGithub, FaCss3Alt, FaHtml5, FaGitAlt, FaSass } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiVite } from "react-icons/si";
import { SkillIcon } from "./SkillIcons";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <div id="skills" className="bg-white text-white dark:bg-primary-900 flex flex-col items-center gap-24 pt-20 pb-20 z-10 max-sm:gap-16 max-sm:pt-10 max-sm:pb-10">
      <Fade delay={100} duration={1500} className="w-4/6 flex flex-col items-center max-sm:w-4/5">
        <h1 className="text-4xl font-bold  dark:text-white text-primary-900 max-sm:text-3xl">{t("skills-title")}</h1>

        <div className="w-full flex flex-wrap justify-center items-center gap-10 dark:text-white text-primary-900">
          <Slide duration={1500} triggerOnce>
            <SkillIcon title="HTML5" icon={<FaHtml5 className="text-6xl text-primary-100" />} />
            <SkillIcon title="CSS3" icon={<FaCss3Alt className="text-6xl text-primary-100" />} />
            <SkillIcon title="Sass" icon={<FaSass className="text-6xl text-primary-100" />} />
            <SkillIcon title="TailwindCSS" icon={<SiTailwindcss className="text-6xl text-primary-100" />} />
            <SkillIcon title="JavaScript" icon={<SiJavascript className="text-6xl text-primary-100" />} />
            <SkillIcon title="TypeScript" icon={<SiTypescript className="text-6xl text-primary-100" />} />
            <SkillIcon title="React.js" icon={<FaReact className="text-6xl text-primary-100" />} />
            <SkillIcon title="Github" icon={<FaGithub className="text-6xl text-primary-100" />} />
            <SkillIcon title="Git" icon={<FaGitAlt className="text-6xl text-primary-100" />} />
            <SkillIcon title="Vite" icon={<SiVite className="text-6xl text-primary-100" />} />
          </Slide>
        </div>
      </Fade>
    </div>
  );
};
