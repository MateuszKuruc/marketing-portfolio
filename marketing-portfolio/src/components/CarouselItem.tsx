import React from "react";
import { CAROUSEL_DATA } from "@/constants";

const CarouselItem = () => {
    return (
        <div className="m-auto w-3/4">
            <div className="mt-20">
{CAROUSEL_DATA.map(item => (
    <div className="bg-white text-black rounded-xl w-[200px] h-[200px]">
        {/* <div className="rounded-t-xl bg-indigo-500 flex items-center justify-center"> */}
<img src={item.img} alt="" className="rounded-3xl bg-indigo-500 flex items-center justify-center border-4 border-blue-50"/>
        {/* </div> */}

        {/* <div>
<p>{item.name}</p>
<p>{item.info}</p>

        </div> */}
    </div>
))}
            </div>
        </div>
    )
};

export default CarouselItem;
