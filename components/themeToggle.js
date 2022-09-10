import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { TbSun, TbMoon } from "react-icons/tb";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-fit text-2xl transition text-[#96A0B3] hover:text-[#212B3F] dark:text-[#3D4F74] dark:hover:text-[#CCD0D9]">
      {theme === "light" ? (
        <button onClick={() => setTheme('dark')}>
          <TbSun />
        </button>
      ) : (
        <button onClick={() => setTheme('light')}>
          <TbMoon />
        </button>
      )}
    </div>
  );
};

export default ThemeToggle;
