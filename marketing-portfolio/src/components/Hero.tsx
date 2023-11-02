import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="mt-4 md:mt-10 border-b-4 border-white skew-y-3 bg-gradient-to-t from-gray-90 to-gray-30 max-container padding-container flex flex-col flexCenter xs:py-5 md:py-10 md:gap-28 lg:py-20"
    >
      <div className="-skew-y-3 md:gap-10 border-5 border-slate-200 flex flex-col-reverse lg:flex-row">
        <div className="lg:ml-12">
          <header>
            <h1 className="font-header hidden lg:block bold-40 lg:bold-52 text-blue-50">
              Facebook Ads - razem zrobimy z tego hit!
            </h1>
            <p className="font-standard regular-20 my-4 text-white xl:max-w-[520px]">
              Nie wiesz, jak zdominować świat{" "}
              <span className="font-medium">Facebook Ads</span>? Trafiłeś w
              dziesiątkę! Odkryj strategie mistrza reklam, które przekształcą
              Twoje kampanie w sukcesy.{" "}
              <span className="font-medium">
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
