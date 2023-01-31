import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

type IProps = {
  menu?: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuMobile = ({ menu, setMenu }: IProps) => {
  return (
    <>
      <button onClick={() => setMenu(!menu)} className="relative z-50 flex justify-center items-center 2xl:hidden text-3xl dark:text-white">
        <GiHamburgerMenu className={menu === true ? "invisible" : "block"} />
      </button>
    </>
  );
};
