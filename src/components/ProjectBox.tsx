import { useTranslation } from "react-i18next";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";

type Props = {
  img: string;
  title: string;
  type?: string;
  children: string;
  reverse?: boolean;
  site?: boolean;
};

export const ProjectBox = ({ img, title, type, reverse, site, children }: Props) => {
  const { t } = useTranslation();

  return (
    <div
      className={`w-full h-fit flex ${
        reverse ? "" : "flex-row-reverse"
      } items-center justify-between gap-20 max-md:gap-5 max-md:flex-col max-md:justify-center max-md:items-center `}
    >
      <div className="hover:scale-105 flex justify-center items-center h-72 w-1/2 max-md:w-full  border-2 border-primary-100 rounded-xl shadow-sm transition-all shadow-primary-100 max-lg:w-2/3 max-sm:w-full  relative max-[400px]:h-52 hover:shadow-lg hover:shadow-primary-100">
        {site ? (
          <div className="absolute w-full h-full bg-gray-800/80 transition-opacity delay-150 opacity-0 z-10 rounded-xl border-2 dark:border-black hover:opacity-100 text-primary-100 font-bold text-xl flex flex-col justify-center items-center gap-4">
            <a href="" className="hover:scale-105">
              {t("project-box-1")}
            </a>
            <a href="" className="hover:scale-105">
              {t("project-box-2")}
            </a>
          </div>
        ) : (
          <div className="absolute w-full h-full bg-gray-800/80 transition-opacity delay-150 opacity-0 z-10 rounded-xl border-2 dark:border-black hover:opacity-100 text-primary-100 font-bold text-xl flex flex-col justify-center items-center gap-4">
            <a href="" className="hover:scale-105">
              {t("project-box-2")}
            </a>
          </div>
        )}
        <img src={img} className="w-full h-full rounded-xl border-2 dark:border-black" alt="" />
      </div>

      <div className="flex flex-col w-1/2 max-md:w-full">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-800  mb-2">{title}</h1>
        <h4 className="flex text-xl gap-5 mb-5 font-medium">
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
        <p className="text-base font-medium">{children}</p>
      </div>
    </div>
  );
};
