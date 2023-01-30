import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useTheme from "../hooks/useTheme";

export const Switcher = () => {
  const [colorTheme, setTheme] = useTheme();
  const [isDarkMode, setDarkMode] = useState(colorTheme === "dark" ? true : false);

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return <DarkModeSwitch onChange={toggleDarkMode} checked={isDarkMode} moonColor="black" sunColor="white" size={27} />;
};
