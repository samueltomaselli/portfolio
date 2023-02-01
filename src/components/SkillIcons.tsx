import { IconBaseProps } from "react-icons";

type ButtonIconProps = {
  title: string;
  icon: IconBaseProps;
};

export const SkillIcon = (props: ButtonIconProps) => {
  return (
    <div className="w-[12rem] h-[10rem] font-semibold border-2 border-primary-100 flex flex-col justify-center items-center gap-3 rounded-lg shadow-primary-100 shadow-md hover:shadow-xl hover:shadow-primary-100 hover:cursor-pointer hover:scale-105 transition-all">
      <>{props.icon}</>
      {props.title}
    </div>
  );
};
