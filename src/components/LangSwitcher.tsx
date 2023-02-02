import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiLanguage } from "react-icons/hi2";

export const LangSwitcher = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "ptbr" : "en";
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <button onClick={handleChangeLanguage}>
      <HiLanguage className="text-3xl dark:text-white max-[330px]:text-4xl" />
    </button>
  );
};
