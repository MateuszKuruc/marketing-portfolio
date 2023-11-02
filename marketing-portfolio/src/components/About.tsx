import Image from "next/image";
import { BiRightArrow } from "react-icons/bi";

const About = () => {
  return (
    <section
      id="about"
      className="border-b-4 border-blue-700 border-t-4 border-white skew-y-3 bg-gradient-to-b from-gray-30 to-gray-90 max-container padding-container py-10 lg:py-20"
    >
      <div className="-skew-y-3 flex justify-between lg:padding-container">
        <header>
          <h1 className="font-header bold-40 lg:bold-52 text-blue-50">
            O mnie
          </h1>
          <p className="font-standard regular-20 mt-4 xl:max-w-[520px] text-white">
            Ekspert w dziedzinie marketingu cyfrowego oferujący ekskluzywne
            usługi dla wyjątkowych klientów.
          </p>
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
