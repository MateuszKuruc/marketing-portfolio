import React from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { Collapse } from "react-collapse";
import { AccordionItemProps } from "../../types";

const AccordionItem = ({
  open,
  toggleAccordion,
  title,
  description,
}: AccordionItemProps) => {
  return (
    <div
    // className="pt-[10px]"
    className="bg-blue-50"
    >
      <div
        // className="bg-white py-[25px] px-[50px] flex justify-between items-center cursor-pointer"
        className="bg-gray-90 border-4 p-10"
        onClick={toggleAccordion}
      >
        <p
        // className="text-[22px] font-semibold"
        className="text-blue-50 bold-32"
        >
          {title}
        </p>
        <div
        // className="text-[30px]"
        >
          {open ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
        </div>
      </div>

      <Collapse className="ReactCollapse--collapse" isOpened={open}>
        <div className="regular-16 p-5">{description}</div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
