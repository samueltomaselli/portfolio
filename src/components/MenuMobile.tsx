import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const MenuMobile = () => {
  const [menu, setMenu] = useState<boolean>(false);

  useEffect(() => {
    console.log(menu);
  }, [setMenu, menu]);

  return (
    <>
      {menu && <div className="absolute bg-white w-10 right-0 ">Olá</div>}

      <button onClick={() => setMenu(!menu)} className="flex justify-center items-center 2xl:hidden text-3xl dark:text-white">
        <GiHamburgerMenu />
      </button>
    </>
  );
};
