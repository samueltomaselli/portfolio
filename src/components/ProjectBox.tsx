import { useTranslation } from "react-i18next";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiGithub } from "react-icons/si";
import { MdOutlineScreenShare } from "react-icons/md";

type Props = {
  img: string;
  title: string;
  type?: string;
  children: string;
  reverse?: boolean;
  urls: {
    github?: string;
    link?: string;
  };
};

export const ProjectBox = ({ img, title, type, reverse, children, urls }: Props) => {
  const { t } = useTranslation();

  return (
    <div
      className={`w-full h-fit flex ${
        reverse ? "" : "flex-row-reverse"
      } items-center justify-between gap-20 max-md:gap-5 max-md:flex-col max-md:justify-center max-md:items-center `}
    >
      <div className="hover:scale-105 flex justify-center items-center h-72 w-1/2 max-md:w-full  border-2 border-primary-100 rounded-xl shadow-sm transition-all shadow-primary-100 max-lg:w-2/3 max-sm:w-full  relative max-[400px]:h-52 hover:shadow-lg hover:shadow-primary-100">
        <div className="absolute w-full h-full bg-gray-800/90 transition-opacity delay-150 opacity-0 z-10 rounded-xl border-2 dark:border-black hover:opacity-100 text-primary-100 font-bold text-xl flex flex-col justify-center items-center gap-4">
          {urls.link ? (
            <a href={urls.link} className="hover:scale-105 flex gap-4 items-center">
              {t("project-box-1")}
              <MdOutlineScreenShare />
            </a>
          ) : null}
          {urls.github ? (
            <a href={urls.github} className="hover:scale-105 flex gap-4 items-center">
              {t("project-box-2")}
              <SiGithub />
            </a>
          ) : null}
        </div>

        <img src={img} className="w-full h-full rounded-xl border-2 dark:border-black" alt="" />
      </div>

      <div className="flex flex-col w-1/2 max-md:w-full gap-5">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-800">{title}</h1>
        <p className="text-base font-medium">{children}</p>
        <h4 className="flex text-2xl gap-5 font-medium text-primary-100">
          {type === "vanilla" ? (
            <>
              <FaHtml5 /> <FaCss3Alt /> <SiJavascript />
            </>
          ) : (
            <>
              <FaReact /> <SiTypescript /> <SiTailwindcss />
            </>
          )}
        </h4>
      </div>
    </div>
  );
};
