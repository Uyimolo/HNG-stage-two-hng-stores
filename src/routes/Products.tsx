import ProductList from "../components/products/ProductList";
import Headliner from "../components/products/Headliner";

const pagination = [1, 2, 3, 4, "...", 15];

const Products = () => {
  const handlePaginaton = () => {
    // scroll back to top
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="px-4 pb-10 pt-28 lg:px-12 xl:px-16">
      <Headliner />

      <div className="mx-auto max-w-[1800px] pt-4 lg:pt-6">
        <ProductList />
      </div>
      {/* pagination */}
      <div className="mt-10 flex items-center justify-center space-x-2">
        {pagination.map((page) =>
          page === "..." ? (
            <div className="grid h-6 w-4 items-center tracking-widest">
              {page}
            </div>
          ) : (
            <div
              className="grid h-6 w-8 place-content-center rounded border border-primary text-[10px] font-bold first:bg-primary first:text-white hover:bg-primary/80 hover:text-white"
              onClick={handlePaginaton}
            >
              {page}
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default Products;
