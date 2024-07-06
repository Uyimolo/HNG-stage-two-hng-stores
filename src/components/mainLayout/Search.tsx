import magnifyingGlassIcon from '../../assets/icons/Vector.svg';
import { cn } from '../../utilities/cn';
const Search = ({ className }: { className: string }) => {
  return (
    <div className={cn('relative h-fit w-full', className)}>
      <input
        type='text'
        placeholder='What are you looking for'
        className='bg-lightGray pl-10 placeholder:text-xs w-full rounded-[10px] h-[36px] flex items-center'
      />
      <img
        src={magnifyingGlassIcon}
        alt=''
        className='absolute w-[13px] left-4 top-1/2 -translate-y-1/2'
      />
    </div>
  );
};

export default Search;
