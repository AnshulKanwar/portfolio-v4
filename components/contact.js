import {
  TbBrandGithub,
  TbMail,
  TbBrandLinkedin,
  TbBrandInstagram,
} from "react-icons/tb";

const Contact = () => {
  return (
    <div>
      <ul className="flex justify-between text-2xl text-[#96A0B3] dark:text-[#3D4F74]">
        <li className="hover:text-[#212B3F] dark:hover:text-[#D9DCE3] transition">
          <a
            href="mailto:me@anshulkanwar.tech"
            target="_blank"
            rel="noreferrer noopener"
          >
            <TbMail />
          </a>
        </li>
        <li className="hover:text-[#212B3F] dark:hover:text-[#D9DCE3] transition">
          <a
            href="https://github.com/AnshulKanwar"
            target="_blank"
            rel="noreferrer noopener"
          >
            <TbBrandGithub />
          </a>
        </li>
        <li className="hover:text-[#212B3F] dark:hover:text-[#D9DCE3] transition">
          <a
            href="https://www.linkedin.com/in/anshul-kanwar/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <TbBrandLinkedin />
          </a>
        </li>
        <li className="hover:text-[#212B3F] dark:hover:text-[#D9DCE3] transition">
          <a
            href="https://www.instagram.com/_0xanshul/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <TbBrandInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
