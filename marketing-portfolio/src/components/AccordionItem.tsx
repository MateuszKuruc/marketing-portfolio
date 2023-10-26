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
    >
      <div
        // className="bg-white py-[25px] px-[50px] flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <p
        // className="text-[22px] font-semibold"
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
        <div>{description}</div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
