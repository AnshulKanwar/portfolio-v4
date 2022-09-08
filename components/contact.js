import {
  TbBrandGithub,
  TbMail,
  TbBrandLinkedin,
  TbBrandInstagram,
} from "react-icons/tb";

const Contact = () => {
  return (
    <div>
      <ul className="flex justify-between text-2xl text-[#96A0B3]">
        <li className="hover:text-[#2B3853] tarnsition">
          <a
            href="mailto:me@anshulkanwar.tech"
            target="_blank"
            rel="noreferrer noopener"
          >
            <TbMail />
          </a>
        </li>
        <li className="hover:text-[#2B3853] tarnsition">
          <a
            href="https://github.com/AnshulKanwar"
            target="_blank"
            rel="noreferrer noopener"
          >
            <TbBrandGithub />
          </a>
        </li>
        <li className="hover:text-[#2B3853] tarnsition">
          <a
            href="https://www.linkedin.com/in/anshul-kanwar/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <TbBrandLinkedin />
          </a>
        </li>
        <li className="hover:text-[#2B3853] tarnsition">
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
