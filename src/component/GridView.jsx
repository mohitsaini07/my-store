/* eslint-disable react/prop-types */
import Product from "./Product";

// eslint-disable-next-line react/prop-types
const GridView = ({ products }) => {
  return (
    <div>
      <div className="w-full h-full grid md:grid-cols-3 grid-cols-1 place-items-center gap-4">
        {products.map((curElem, index) => {
          return <Product key={index} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default GridView;
