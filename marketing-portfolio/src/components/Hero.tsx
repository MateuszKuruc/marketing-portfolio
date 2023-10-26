import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="skew-y-3 bg-gradient-to-r from-blue-50 max-container padding-container border-2 flex flex-col border-red-500 gap-20 py-10 pb-32 md:gap-28 lg:py-20">
      <div className="-skew-y-3">

      <Image
        className="self-center"
        src="/expert2.jpg"
        width={350}
        height={350}
        alt="expert photo"
        />
      <h1 className="bold-52 lg:bold-70">Social media ekspert</h1>
      <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        Ogarnij se social media, cokolwiek robisz to barti ogarnie, bedzie git.
        Marketing jest super wazny bo wiadomo. Jak cos to wiecej info na dole,
        tutaj tylko wstep. Bedzie spoko strona z tego.
      </p>
        </div>
    
    </section>
  );
};

export default Hero;
