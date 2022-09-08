import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <div className="mb-20">
        <Image src="/logo.svg" alt="" layout="fixed" width={150} height={150} />
      </div>
      <nav>
        <ul className="text-xl font-light text-right flex flex-col gap-6 text-[#96A0B3]">
          <li className="transition hover:text-[#2B3853] cursor-pointer">
            Home
          </li>
          <li className="transition hover:text-[#2B3853] cursor-pointer">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
