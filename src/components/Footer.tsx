import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center dark:text-white font-semibold pt-20 gap-5 pb-10 max-sm:gap-2 max-sm:text-sm max-sm:flex-col">
      <h5>Samuel Tomaselli</h5> <span className="max-sm:hidden">|</span> <h5>{t("footer-title")}</h5>
    </div>
  );
};
