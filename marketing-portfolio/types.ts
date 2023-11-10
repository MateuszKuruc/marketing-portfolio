export interface AccordionItemProps {
  open: boolean;
  toggleAccordion: () => void;
  id: number;
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
  phone?: number | string;
  message: string;
}

export type Params = {
  params: {
    projectId: string;
  };
};