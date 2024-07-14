import { cn } from "../../utilities/cn";

interface ButtonProps {
  variant: string;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "reset" | "submit";
  icon?: string;
  iconClass?: string;
}
const Button = ({
  variant,
  className,
  children,
  type = "button",
  icon,
  iconClass,
}: ButtonProps) => {
  let buttonClass = "";

  if (variant === "primary") {
    buttonClass = "bg-primary border-primary text-white hover:bg-primary/80";
  } else if (variant === "outline") {
    buttonClass = "bg-white border-primary hover:bg-primary hover:text-white";
  } else if (variant === "secondary") {
    buttonClass = "bg-orange hover:bg-orange/90 border-orange";
  }
  return (
    <button
      type={type}
      className={cn(
        "flex items-center justify-center gap-2 text-nowrap rounded-[6px] border px-4 py-1.5 text-sm transition duration-100 lg:min-w-[3rem] lg:px-5 lg:text-base",
        buttonClass,
        className,
      )}
    >
      {children}
      <img src={icon} alt="" className={iconClass} />
    </button>
  );
};

export default Button;
