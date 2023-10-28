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
  variant: "btn_submit";
};
