import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const MenuMobile = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div className="flex justify-center items-center 2xl:hidden text-3xl">
      <GiHamburgerMenu />
    </div>
  );
};
