import Image from "next/image";
import { ButtonProps } from "../../types";

const Button = ({ disabled, type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`rounded-full min-w-[250px] self-center mt-2 ${variant}`}
      type={type}
      title={title}
      disabled={disabled}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-18 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
