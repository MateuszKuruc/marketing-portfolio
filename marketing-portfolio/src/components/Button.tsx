import Image from "next/image";
import { ButtonProps } from "../../types";

// EXAMPLE:

{
  /* <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div> */
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`rounded-full min-w-[250px] self-center mt-2 ${variant}`}
      type={type}
      title={title}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
