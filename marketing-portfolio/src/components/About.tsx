import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="border-t-4 border-white my-10 skew-y-3 bg-gradient-to-b from-gray-90 max-container padding-container py-10 md:gap-28 lg:py-20 gap-20"
    >
      <div className="-skew-y-3 flex gap-10 justify-around padding-container">
        <header>
          <h1 className="bold-64 lg:bold-88 text-blue-50">O mnie</h1>
          <p className="regular-24 mt-6 xl:max-w-[520px] text-white">
            Jestem fajowym marketingowcem, zrobie ci graficzke i zmontuje teksty
            reklamowe. Zajmuje sie tym 20 lat co najmniej. Co bys jeszcze
            chcial? Robie:
          </p>
          <ul className="list-disc text-white regular-24">
            <li className="mt-3">kampanie fb</li>
            <li>prowadze social media fb i ig</li>
            <li>prowadze tysiac rodzajow kampanii w necie</li>
            <li>kompleksowo ogarne ci marketing</li>
          </ul>
        </header>
        <div className="flex flex-col gap-6 items-center justify-center">

        <Image
          className="hidden xl:block"
          src="/meta_cert.png"
          width={250}
          height={250}
          alt="Meta certification"
          />
        <Image
        className="hidden xl:block"
          src="/google_cert.png"
          width={250}
          height={250}
          alt="Google certification"
          />
          </div>
      </div>
    </section>
  );
};

export default About;
