import { ReactNode } from "react";
import { IconBaseProps } from "react-icons";
import { FiPlus } from "react-icons/fi";

type ButtonIconProps = {
  title: string;
  icon: IconBaseProps;
};

export const SkillIcon = (props: ButtonIconProps) => {
  return (
    <div className="skill-box ">
      <>{props.icon}</>
      {props.title}
    </div>
  );
};
