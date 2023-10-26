export interface AccordionItemProps {
  open: boolean;
  toggleAccordion: () => void;
  title: string;
  description: string;
}

export type ButtonProps = {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant: "btn_dark_green";
  };

