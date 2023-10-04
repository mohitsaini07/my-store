import { AiFillAppstore } from "react-icons/ai";
import { GrUnorderedList } from "react-icons/gr";
import { useFilterContext } from "../context/filterContext";

const SortProduct = () => {
  const { gridView, setGridView, setListView, filterProducts, sorting } =
    useFilterContext();
  return (
    <>
      <div className="w-full flex items-center justify-around mb-2 p-2 bg-gradient-to-l from-gray-900 to-gray-600  rounded-lg font-poppins">
        <div className="flex items-center gap-4">
          <AiFillAppstore
            onClick={setGridView}
            className={
              gridView
                ? "text-black cursor-pointer bg-white rounded-sm w-7 h-7 p-1 transition-all duration-100 ease-in-out"
                : "text-white cursor-pointer w-7 h-7 p-1"
            }
          />
          <GrUnorderedList
            onClick={setListView}
            className={
              !gridView
                ? "text-black cursor-pointer bg-white w-7 h-7 p-1 rounded-sm transition-all duration-100 ease-in-out"
                : "text-white cursor-pointer w-7 h-7 p-1"
            }
          />
        </div>
        <div className="uppercase md:block hidden text-white font-normal">{`${filterProducts.length} Products Available`}</div>
        <div className="">
          <form action="#">
            <select
              className="text-gray-600 py-1 md:px-4 px-1 font-medium rounded-xl text-center uppercase mt-2 text-sm"
              name=""
              id="sort"
              onClick={sorting}
            >
              <option className="bg-slate-100 text-sm uppercase" value="lowest">
                Price(lowest)
              </option>
              <option
                className="bg-slate-100 text-sm uppercase"
                value="highest"
              >
                Price(highest)
              </option>
              <option className="bg-slate-100 text-sm uppercase" value="a-z">
                Price(a-z)
              </option>
              <option className="bg-slate-100 text-sm uppercase" value="z-a">
                Price(z-a)
              </option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
};

export default SortProduct;
