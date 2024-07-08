import magnifyingGlassIcon from "../../assets/icons/Vector.svg";
import { cn } from "../../utilities/cn";
const Search = ({ className }: { className: string }) => {
  return (
    <div className={cn("relative h-fit w-full", className)}>
      <input
        type="text"
        placeholder="What are you looking for"
        className="flex h-[36px] w-full items-center rounded-[10px] bg-lightGray pl-10 placeholder:text-xs"
      />
      <img
        src={magnifyingGlassIcon}
        alt=""
        className="absolute left-4 top-1/2 w-[13px] -translate-y-1/2"
      />
    </div>
  );
};

export default Search;
