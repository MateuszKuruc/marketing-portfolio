"use client";
import React from "react";
import { CAROUSEL_DATA } from "@/constants";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const CarouselItem = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <section className="max-container padding-container bg-slate-200 p-10 border-y-4 border-white mt-4 md:mt-10">
      <div className="flex items-center justify-center mb-12">
        <h1 className=" font-header text-coral-50 bold-40 lg:bold-52">
          Zaufali mi:
        </h1>
      </div>
      <Carousel
        className="pb-14"
        responsive={responsive}
        showDots={true}
        slidesToSlide={2}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        ssr={true}
        centerMode={true}
      >
        {CAROUSEL_DATA.map((item) => (
          <div key={item.name} className="mx-1">
            <Image
              src={item.img}
              width={300}
              height={300}
              alt={item.name}
              className="border-4 border-coral-50 rounded-full"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default CarouselItem;
