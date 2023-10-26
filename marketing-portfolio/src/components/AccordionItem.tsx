import React from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { Collapse } from "react-collapse";

const AccordionItem = ({ open, toggle, title, description }) => {
  return (
    <div className="pt-[10px]">
      <div
        className="bg-white py-[25px] px-[50px] flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <p className="text-[22px] font-semibold">{title}</p>
        <div className="text-[30px]">
          {open ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
        </div>
      </div>

      <Collapse isOpened={open}></Collapse>
    </div>
  );
};

export default AccordionItem;
