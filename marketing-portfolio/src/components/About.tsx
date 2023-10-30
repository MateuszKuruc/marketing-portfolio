import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="border-t-4 border-white my-10 skew-y-3 bg-gradient-to-b from-gray-90 max-container padding-container py-10 md:gap-28 lg:py-20 gap-20"
    >
      <div className="-skew-y-3 flex gap-10 ">
        <header>
          <h1 className="bold-52 lg:bold-70 text-blue-50">O mnie</h1>
          <p className="regular-20 mt-6 xl:max-w-[520px] text-white">
            Jestem fajowym marketingowcem, zrobie ci graficzke i zmontuje teksty
            reklamowe. Zajmuje sie tym 20 lat co najmniej. Co bys jeszcze
            chcial? Robie:
          </p>
          <ul className="list-disc text-white regular-20">
            <li className="mt-3">kampanie fb</li>
            <li>prowadze social media fb i ig</li>
            <li>prowadze tysiac rodzajow kampanii w necie</li>
            <li>kompleksowo ogarne ci marketing</li>
          </ul>
        </header>
        <Image
          className="hidden lg:block"
          src="/placeholder.jpg"
          width={350}
          height={350}
          alt="marketing photo"
        />
      </div>
    </section>
  );
};

export default About;
