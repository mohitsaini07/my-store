import { useProductContext } from "../context/ProductContext";
import Product from "./Product";

const FeatureProducts = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return (
      <div className="flex flex-col gap-12 py-20 md:px-52 bg-gray-300 w-full">
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-3 bg-slate-100 animate-pulse"></div>
          <div className="w-40 h-3 bg-slate-100 animate-pulse"></div>
        </div>
        <div className="grid md:grid-cols-3 place-items-center gap-4">
          <div className="w-80 h-56 bg-slate-100 animate-pulse rounded-sm"></div>
          <div className="w-80 h-56 bg-slate-100 animate-pulse rounded-sm"></div>
          <div className="w-80 h-56 bg-slate-100 animate-pulse rounded-sm"></div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col items-center gap-12 py-20 md:px-52 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
        <div className="text-center md:text-justify">
          <div className="uppercase text-gray-600 md:text-sm">Check Now!</div>
          <div className="md:text-2xl text-xl text-gray-600 font-semibold">
            Our Feature Services
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FeatureProducts;
