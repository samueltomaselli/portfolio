import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState<string>(localStorage.theme || 'dark');
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root?.classList.remove(colorTheme);
    root?.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [colorTheme, setTheme] as const; 
}
