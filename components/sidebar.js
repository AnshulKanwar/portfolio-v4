import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./themeToggle";
import Logo from "./logo";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-end">
      <div className="mb-20 w-36">
        <Logo />
      </div>
      <nav className="mb-10">
        <ul className="text-xl font-light text-right flex flex-col gap-6 text-[#96A0B3] dark:text-[#3D4F74]">
          <li className="transition hover:text-[#212B3F] dark:hover:text-[#D9DCE3] cursor-pointer">
            Home
          </li>
          <li className="transition hover:text-[#212B3F] dark:hover:text-[#D9DCE3] cursor-pointer">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </div>
  );
};

export default Sidebar;
