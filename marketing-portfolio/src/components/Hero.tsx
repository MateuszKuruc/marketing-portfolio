import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="border-b-4 border-white skew-y-3 bg-gradient-to-t from-gray-90 max-container padding-container flex flex-col flexCenter gap-20 py-10 pb-32 md:gap-28 lg:py-20"
    >
      <div className="-skew-y-3 gap-10 border-5 border-slate-200 flex flex-col-reverse lg:flex-row">
        <div className="lg:ml-12">

        <header>
          <h1 className="mt-6 bold-64 lg:bold-88 text-blue-50">
            Social media ekspert
          </h1>
          <p className="regular-24 mt-6 text-white xl:max-w-[520px]">
            Ogarnij se social media, cokolwiek robisz to barti ogarnie, bedzie
            git. Marketing jest super wazny bo wiadomo. Jak cos to wiecej info
            na dole, tutaj tylko wstep. Bedzie spoko strona z tego.
          </p>
        </header>
        </div>
        <Image
          src="/bartosz_kuruc.png"
          width={500}
          height={350}
          alt="Bartosz Kuruc"
        />
      </div>
    </section>
  );
};

export default Hero;
