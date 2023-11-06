"use client";

import Image from "next/image";
import { BiRightArrow } from "react-icons/bi";
import Reveal from "./Reveal";

const About = () => {
  return (
    
      <section
        id="about"
        className="border-t-0 border-white skew-y-3 bg-gradient-to-br from-gray-90 to-gray-30 max-container padding-container py-10 lg:py-20"
      >
        <div className="-skew-y-3 flex justify-between lg:padding-container">
          <header>
            <h1 className="font-header bold-40 lg:bold-52 text-blue-50">
              O mnie
            </h1>
            <Reveal>

            <p className="font-standard regular-20 mt-4 xl:max-w-[520px] text-white">
              Ekspert w dziedzinie marketingu cyfrowego oferujący ekskluzywne
              usługi dla wyjątkowych klientów.
            </p>
            </Reveal>

            
            <Reveal>
            <ul className="ml-6 font-standard text-white regular-20 list-none">
              <li className="mt-2 flex items-center gap-2">
                <BiRightArrow />
                Kampanie Facebook Ads
              </li>

              <li className="flex items-center gap-2">
                <BiRightArrow /> Audyty kont Facebook Ads
              </li>
              <li className=" flex items-center gap-2">
                <BiRightArrow />
                Google Ads
              </li>
              <li className="flex items-center gap-2">
                <BiRightArrow />
                Facebook Pixel
              </li>
              <li className="flex items-center gap-2">
                <BiRightArrow />
                Google Analytics 4
              </li>
              <li className="flex items-center gap-2">
                <BiRightArrow />
                Google Tag Manager
              </li>
            </ul>
            </Reveal>
          </header>
          <div className="flex flex-col gap-6 items-center justify-center">
            <Image
              className="hidden xl:block border-4 border-coral-50 rounded-full"
              src="/meta_cert.png"
              width={250}
              height={250}
              alt="Meta certyfikat"
            />
            <Image
              className="hidden xl:block rounded-2xl border-4 border-coral-50"
              src="/google_cert.png"
              width={250}
              height={88}
              alt="Google certyfikat"
            />
          </div>
        </div>
      </section>
    
  );
};

export default About;
