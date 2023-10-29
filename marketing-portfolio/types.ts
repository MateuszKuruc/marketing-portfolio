import { StringSchema } from "yup";

export interface AccordionItemProps {
  open: boolean;
  toggleAccordion: () => void;
  title: string;
  description: string;
}

export type ButtonProps = {
  disabled: boolean;
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: "btn_submit" | "btn_disabled";
};

export interface FormValues {
  name: string;
  email: string;
  phone?: number;
  message: string;
}
