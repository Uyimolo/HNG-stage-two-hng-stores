import ProductList from "../components/products/ProductList";
import Headliner from "../components/products/Headliner";
import Container from "../layout/Container";
// import Pagination from "../components/products/Pagination";
// import { useState } from "react";

const Products = () => {

  return (
    <section className="overflow-hidden">
      <Container className="">
        <Headliner />

        <Container className="mx-auto  px-0 pt-3 lg:px-0 lg:pt-6 xl:px-0">
          <ProductList />
        </Container>
        {/* pagination */}
        {/* <Pagination /> */}
      </Container>
    </section>
  );
};

export default Products;
