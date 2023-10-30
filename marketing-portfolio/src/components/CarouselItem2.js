"use client";
import React from "react";
import { CAROUSEL_DATA } from "@/constants";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

// import Image from "next/image";

const CarouselItem2 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div 
    className="max-container padding-container"
    >
      <h1 className="text-blue-50 bold-52 lg:bold-70">Klienci, którzy mi zaufali:</h1>
      <Carousel responsive={responsive}>
        {CAROUSEL_DATA.map((item) => (
          <div key={item.name}>
            <Image src={item.img} width={200} height={200} alt={item.name} className="border-4 rounded-2xl border-blue-50" />
          </div>
        ))}
        {/* <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div> */}
      </Carousel>
    </div>
  );
};

export default CarouselItem2;
