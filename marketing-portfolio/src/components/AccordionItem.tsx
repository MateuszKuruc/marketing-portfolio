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
    <div className="bg-blue-30">
      <div
        className="bg-gray-90 border-2 p-10 flex flexBetween border-coral-50"
        onClick={toggleAccordion}
      >
        <p className="font-header text-white regular-32">{title}</p>
        <div>
          {open ? (
            <AiFillMinusCircle color="white" size={50} />
          ) : (
            <AiFillPlusCircle color="white" size={50} />
          )}
        </div>
      </div>

      <Collapse className="ReactCollapse--collapse" isOpened={open}>
        <div className="font-standard regular-20 p-5 flex flex-col gap-4">
          <p>{description}</p>
          {open && (

            <Link
            className="font-medium text-slate-500 regular-20 hover:text-slate-700"
            href={`/portfolio/${id}`}
            >
            Zobacz więcej...
          </Link>
            )}
        </div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
