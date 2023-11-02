import React from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { Collapse } from "react-collapse";
import { AccordionItemProps } from "../../types";
import Link from "next/link";

const AccordionItem = ({
  open,
  toggleAccordion,
  id,
  title,
  description,
}: AccordionItemProps) => {
  return (
    <div className="bg-blue-50">
      <div
        className="bg-gray-90 border-2 p-10 flex flexBetween"
        onClick={toggleAccordion}
      >
        <p className="text-white bold-32">{title}</p>
        <div>
          {open ? (
            <AiFillMinusCircle color="white" size={50} />
          ) : (
            <AiFillPlusCircle color="white" size={50} />
          )}
        </div>
      </div>

      <Collapse className="ReactCollapse--collapse" isOpened={open}>
        <div className="medium-18 p-5">{description} <Link href={`/portfolio/${id}`}>Czytaj dalej...</Link></div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
