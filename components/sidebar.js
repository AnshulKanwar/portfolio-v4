import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="grid place-items-center border-r border-[#96A0B3]">
      <div>
        <div className="mb-20">
          <Image
            src="/logo.svg"
            alt=""
            layout="fixed"
            width={150}
            height={150}
          />
        </div>
        <nav>
          <ul className="text-xl font-light text-right flex flex-col gap-6 text-[#96A0B3]">
            <li className="transition hover:text-[#2B3853]">Home</li>
            <li className="transition hover:text-[#2B3853]">Blog</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
