import { cn } from '../../utilities/cn';

interface ButtonProps {
  variant: string;
  className?: string;
  children: React.ReactNode;
  //   link?: string;
}
const Button = ({ variant, className, children }: ButtonProps) => {
  let buttonClass = '';

  if (variant === 'primary') {
    buttonClass = 'bg-primary text-white hover:bg-primary/85';
  } else if (variant === 'outline') {
    buttonClass =
      'bg-white border-primary hover:bg-primary hover:text-white';
  }
  return (
    <button
      className={cn(
        'border border-green rounded-[6px] text-[15px] lg:text-xs h-[31px] w-full min-w-[134px] max-w-[134px] transition duration-100 lg:max-w-[83px] lg:min-w-[83px]',
        buttonClass,
        className
      )}>
      {children}
    </button>
  );
};

export default Button;
