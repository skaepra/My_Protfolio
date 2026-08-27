import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem("dark");
    return saved === "light" ? "light" : "dark";
  });

  useEffect(() => {
    localStorage.setItem("dark", mode);
    const root = document.documentElement;

    if (mode === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [mode]);


  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { mode, toggleMode, isDark: mode === "dark" };
}