import { Link } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, image, name, category, price } = curElem;
  return (
    <>
      <Link to={`/SingleProduct/${id}`}>
        <div className="shadow w-80 h-full bg-gradient-to-b from-gray-100 to-gray-300 object-cover font-poppins hover:opacity-75 hover:bg-blue-100 transition-all duration-75 ease-in-out">
          <figure className="relative rounded overflow-hidden">
            <img className="w-80 h-52 object-cover" src={image} alt={name} />
            <figcaption className="caption absolute top-2 right-2 bg-white px-4 py-2 rounded-3xl uppercase text-gray-600 text-sm">
              {category}
            </figcaption>
          </figure>
          <div className="flex items-center justify-between p-5">
            <div className="capitalize">{name}</div>
            <div className="text-gray-600">
              <FormatPrice price={price} />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
