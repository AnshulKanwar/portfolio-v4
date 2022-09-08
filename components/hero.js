import Contact from "./contact";

const Hero = () => {
  return (
    <div className="h-full grid place-items-center">
      <div className="flex flex-col gap-20">
        <main className="text-2xl">
          Hi
          <br />I am <span className="font-bold">Anshul Kanwar</span>
          <br />I am a computer science student
        </main>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Hero;
