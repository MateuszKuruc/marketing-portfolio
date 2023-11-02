import React from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { Collapse } from "react-collapse";
import { AccordionItemProps } from "../../types";
import CaseStudy from "./Portfolio/[id]/CaseStudy";

const AccordionItem = ({
  open,
  toggleAccordion,
  title,
  description,
  details,
  name,
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
        <div className="medium-18 p-5">
          {description}
          <CaseStudy
            title={title}
            description={description}
            details={details}
            name={name}
          />
        </div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
