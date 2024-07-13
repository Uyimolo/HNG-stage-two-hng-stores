import { cn } from "../../utilities/cn";

type paginationProps = {
  numberOfPages: number;
  setPage: (pageNumber: number) => void;
  currentPageNumber: number;
};

const Pagination = ({
  numberOfPages,
  setPage,
  currentPageNumber,
}: paginationProps) => {
  const paginationArray = Array.from(
    { length: numberOfPages },
    (_, index) => index + 1,
  );

  const handlePagination = (page: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setInterval(() => setPage(page), 1000);
  };
  return (
    <div className="mb-4 mt-16 flex items-center justify-center space-x-2 lg:mb-12 lg:mt-20">
      {paginationArray?.map((page, index) => (
        <div
          key={index}
          className={cn(
            "grid h-6 w-8 cursor-pointer place-content-center rounded border border-primary text-[10px] font-bold hover:bg-primary/80 hover:text-white",
            page === currentPageNumber ? "bg-primary text-white" : "",
          )}
          onClick={() => handlePagination(page)}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
