/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const ListView = ({ products }) => {
  return (
    <>
      <div className="md:grid grid-cols-1 gap-4 md:block hidden">
        {products.map((curElem, index) => {
          const { id, name, image, price, description } = curElem;
          return (
            <div
              key={index}
              className="flex items-center gap-10 font-poppins rounded-lg bg-gradient-to-r from-gray-100 to-gray-300"
            >
              <div className="">
                <img
                  src={image}
                  className="w-72 h-52 object-cover rounded-lg"
                  alt={name}
                />
              </div>
              <div className="pr-4">
                <div className="text-xl font-semibold mb-4 capitalize">{name}</div>
                <div className="text-gray-600 text-sm text-justify">
                  {description.slice(0, 90)}...
                </div>
                <div className="mt-2">
                  <FormatPrice price={price} />
                </div>
                <Link to={`/SingleProduct/${id}`}>
                  <button className="py-1 px-2 uppercase bg-slate-300 rounded-sm border-2 border-slate-400 mt-2 hover:bg-slate-400 cursor-pointer transition-all duration-75 ease-in-out">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListView;
