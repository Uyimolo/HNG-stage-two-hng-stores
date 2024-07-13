import { cn } from "../utilities/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "px-4 pb-10 pt-[5.8rem] min-h-[600px] md:pt-28 lg:px-12 lg:pt-36 xl:px-16",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
