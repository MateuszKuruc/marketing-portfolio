// "use client";
// import React from "react";
// import { CAROUSEL_DATA } from "@/constants";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Image from "next/image";

// const CarouselItem = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="m-auto w-3/4">
//       <div className="mt-20">
//         <Slider {...settings}>
//           {CAROUSEL_DATA.map((item) => (
//             <div
//               key={item.name}
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

// export default CarouselItem;
