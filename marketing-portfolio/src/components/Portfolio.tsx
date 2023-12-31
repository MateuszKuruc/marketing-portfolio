"use client";

import React from "react";
import { ACCORDION_DATA } from "@/constants";
import AccordionItem from "./AccordionItem";
import { useState } from "react";
import Reveal from "./Reveal";

const Portfolio = () => {
  const [open, setOpen] = useState<number | string | false>(0);

  const toggleAccordion = (index: number) => {
    if (open === index) {
      return setOpen(false);
    }
    setOpen(index);
  };

  return (
    <section className=" border-t-4 border-white max-container padding-container bg-gradient-to-t from-gray-30 to-gray-90 py-10 lg:py-20 md:gap-28">
      <header className="mb-10 padding container max-container flex flex-col items-center">
        <h1 className="font-header bold-40 lg:bold-52 text-blue-50">
          Case study
        </h1>
      </header>
      <Reveal>
        <div className="max-container md:padding-container">
          {ACCORDION_DATA.map((data, index) => {
            return (
              <AccordionItem
                key={index}
                open={index === open}
                id={data.id}
                title={data.title}
                description={data.description}
                toggleAccordion={() => toggleAccordion(index)}
              />
            );
          })}
        </div>
      </Reveal>
    </section>
  );
};

export default Portfolio;
