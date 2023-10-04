import FilteredSection from "../component/FilteredSection";
import SortProduct from "../component/SortProduct";
import ProductList from "../component/ProductList";

const Products = () => {
  return (
    <>
      <div className="flex justify-center gap-4 pt-32 w-full md:px-20 px-10 pb-20">
        <div className="w-[20%] md:block hidden">
          <FilteredSection />
        </div>
        <div className="w-full">
          <div className="md:block hidden">
            <SortProduct />
          </div>
          <div className="">
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
