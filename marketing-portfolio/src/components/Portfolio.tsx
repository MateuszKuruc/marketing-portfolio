import React from "react";
import { ACCORDION_DATA } from "@/constants";

const Portfolio = () => {
  return (
    <section className="border-t-4 border-white max-container padding-container bg-gradient-to-t from-gray-90 py-10 lg:py-20 md:gap-28">
      <header className="mb-10 padding container max-container">
        <h1 className="bold-52 lg:bold-70 text-blue-50">Portfolio</h1>
        <p className="regular-16 text-white mt-6">
          Sprawdz jak poprawilem marketingowe wskazniki u moich klientow i
          wynioslem ich marketing na jakis kosmiczny poziom ze hej
        </p>
      </header>
<div className="bg-gray-90 padding-container max-container py-10">
{ACCORDION_DATA.map((data, index) => {
  return <AccordionItem />
})}
</div>

    </section>
  );
};

export default Portfolio;

// divide border for projects? with accordion? first one shown
