import Contact from "./contact";

const Hero = () => {
  return (
    <div className="h-full grid place-items-center">
      <div className="flex flex-col gap-20">
        <main className="text-2xl">
          Hi
          <br />I am <span className="font-bold">Anshul Kanwar</span>
          <br />I am a computer science student
          <br /> You can view my resume{" "}
          <a
            href="https://drive.google.com/file/d/1Y--y1dNkt2m0ldL2floi1HkF7RlHiMfg/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            here
          </a>
        </main>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Hero;
