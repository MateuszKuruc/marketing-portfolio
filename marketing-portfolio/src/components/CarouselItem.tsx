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
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div className="max-container padding-container bg-pink-50 p-10">
      <h1 className="text-blue-50 bold-52 lg:bold-70 mb-5">
        Klienci, którzy mi zaufali:
      </h1>
      <Carousel
        className="pb-10"
        responsive={responsive}
        showDots={true}
        // autoPlay={true}
        // autoPlaySpeed={1000}
        infinite={true}
        ssr={true}
        // partialVisbile={true}
        centerMode={true}
        // focusOnSelect={true}
      >
        {CAROUSEL_DATA.map((item) => (
          <div key={item.name} className="mx-1">
            <Image
              src={item.img}
              width={200}
              height={200}
              alt={item.name}
              className="border-4 border-blue-50 rounded-full"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselItem;
