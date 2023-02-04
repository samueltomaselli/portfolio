import { useTranslation } from "react-i18next";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";

type Props = {
  img: string;
  title: string;
  type?: string;
  height: string;
};

export const ProjectBox = ({ img, title, type, height }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="hover:scale-105 hover:cursor-pointer">
      <h1 className="text-center text-2xl font-bold text-primary-100 mb-2">{title}</h1>
      <h4 className="flex justify-center text-xl gap-5 mb-5 font-medium">
        {type === "vanilla" ? (
          <>
            <AiFillHtml5 /> <FaCss3Alt /> <SiJavascript />
          </>
        ) : (
          <>
            <FaReact /> <SiTypescript /> <SiTailwindcss />
          </>
        )}
      </h4>
      <div
        className={`flex justify-center items-center h-${height} border-2 border-primary-100 rounded-xl  shadow-sm transition-all shadow-primary-100 max-lg:w-2/3 max-sm:w-full mb-10 relative`}
      >
        <div className="absolute w-full h-full bg-gray-800/80 transition-opacity delay-150 opacity-0 z-10 rounded-xl border-2 dark:border-black hover:opacity-100 text-primary-100 font-bold text-xl flex flex-col justify-center items-center gap-4">
          <a href="" className="hover:scale-105">
            {t("project-box-1")}
          </a>
          <a href="" className="hover:scale-105">
            {t("project-box-2")}
          </a>
        </div>
        <img src={img} className="w-full h-full rounded-xl border-2 dark:border-black " alt="" />
      </div>
    </div>
  );
};
