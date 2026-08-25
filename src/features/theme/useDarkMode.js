import { useState, useEffect } from "react";

export default function useDarkMode() {
  // قراءة الوضع المحفوظ في localStorage أو الاعتماد على "dark" كافتراضي
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem("dark");
    return saved === "light" ? "light" : "dark";
  });

  // تحديث كلاس عنصر html وحفظ القيمة عند تغيير mode
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

  // دالة التبديل بين الوضعين
  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { mode, toggleMode, isDark: mode === "dark" };
}