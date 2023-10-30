"use client";
import React from "react";
import { CAROUSEL_DATA } from "@/constants";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Image from "next/image";

// const CarouselItem2 = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 2,
    
//   };

//   return (
//     <div className="m-auto w-3/4">
//       <div className="mt-20">
//         <Slider {...settings}>
//           {CAROUSEL_DATA.map((item) => (
//             <div
//               key={item.name}
//               className="w-[500px]"
//                 // className="bg-white text-black rounded-xl w-[200px] h-[200px]"
//             >
//               {/* <img
//                 src={item.img}
//                 alt={item.name}
//                 className="rounded-3xl bg-indigo-500 flex items-center justify-center border-4 border-blue-50"
//               /> */}
//               <Image src={item.img} width={200} height={200} alt={item.name} />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };


const CarouselItem2 = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return (
<div><h1>test</h1>
<Carousel responsive={responsive}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>
</div>
    )
}

export default CarouselItem2;