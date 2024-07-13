import { cn } from "../../utilities/cn";

interface ButtonProps {
  variant: string;
  className?: string;
  children: React.ReactNode;
  type?: "button"| 'reset'| "submit";
}
const Button = ({ variant, className, children, type='button' }: ButtonProps) => {
  let buttonClass = "";

  if (variant === "primary") {
    buttonClass = "bg-primary border-primary text-white hover:bg-primary/80";
  } else if (variant === "outline") {
    buttonClass = "bg-white border-primary hover:bg-primary hover:text-white";
  } else if (variant === "secondary") {
    buttonClass = "bg-orange hover:bg-orange/80";
  }
  return (
    <button
      type={type}
      className={cn(
        "text-nowrap rounded-[6px] border px-4 py-1.5 text-xs transition duration-100 lg:min-w-[3rem] lg:px-5 lg:text-base",
        buttonClass,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
