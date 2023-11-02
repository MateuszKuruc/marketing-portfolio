import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="border-b-4 border-white skew-y-3 bg-gradient-to-b from-gray-90 to-coral-50 max-container padding-container flex flex-col flexCenter gap-20 py-10 pb-32 md:gap-28 lg:py-20"
    >
      <div className="-skew-y-3 gap-10 border-5 border-slate-200 flex flex-col-reverse lg:flex-row">
        <div className="lg:ml-12">
          <header>
            <h1 className="font-header hidden md:block mt-6 bold-40 lg:bold-52 text-blue-50">
              Facebook Ads - razem zrobimy z tego hit!
            </h1>
            <p className="medium-22 mt-6 text-black xl:max-w-[520px]">
              Nie wiesz, jak zdominować świat{" "}
              <span className="text-white">Facebook Ads</span>? Trafiłeś w
              dziesiątkę! Odkryj strategie mistrza reklam, które przekształcą
              Twoje kampanie w sukcesy.{" "}
              <span className="text-white">
                To Twój czas na przełom w marketingu.
              </span>
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
