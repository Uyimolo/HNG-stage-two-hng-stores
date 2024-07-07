import caret from '../../../assets/icons/caret.svg';
import useReactQuery from '../../../utilities/useReactQuery';

type Category = {
  slug: string;
  name: string;
  url: string;
}[];

type CategoryProps = {
  setSelectedCategory: (category: string) => void;
}

const Categories = ({setSelectedCategory}:CategoryProps) => {
  const url = `https://dummyjson.com/products/categories`;

  const fetchCategories = async () => {
    const response = await fetch(url);
    return await response.json();
  };

  const { data } = useReactQuery<Category>(['category', url], fetchCategories);

  console.log(data);
  return (
    <div className=''>
      <div className='space-y-2'>
        {/* toggler */}
        <button className='bg-primary text-[8px]  py-1 px-2 rounded-[4px] flex space-x-2 items-center text-white md:text-xs lg:text-xs xl:text-base '>
          Categories <img src={caret} alt='' />
        </button>

        {/* category list */}
        <ul className='text-[8px] md:text-xs lg:text-xs xl:text-base space-y-2 pl-2 py-1 border border-gray'>
          {data?.slice(0, 10).map((category) => (
            <li className='cursor-pointer' onClick={()=> setSelectedCategory(category.slug)} key={category.name}>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
