import { useFilterContext } from "../context/filterContext";
import { TiTick } from "react-icons/ti";

const FilteredSection = () => {
  const {
    filters: { text, color },
    allProducts,
    updateFilterValue,
    clearFilters,
  } = useFilterContext();

  // TO get unique data of each fields
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });
    if (attr === "colors") {
      newVal = newVal.flat();
    }
    return (newVal = ["all", ...new Set(newVal)]);
  };

  //We need unique data
  const categoryOnlyData = getUniqueData(allProducts, "category");
  const companyData = getUniqueData(allProducts, "company");
  const colorsData = getUniqueData(allProducts, "colors");

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-600  p-6 rounded font-poppins">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Search"
          className="py-1 px-2 rounded-2xl text-center text-gray-500 max-w-full active:bg-blue-100"
          type="text"
          name="text"
          value={text}
          onChange={updateFilterValue}
        />
      </form>
      <div className="font-medium my-4 text-white uppercase">Category</div>
      <div className="flex flex-col gap-4 items-start">
        {categoryOnlyData.map((curElem, index) => {
          return (
            <button
              className="capitalize text-slate-200 font-light hover:text-slate-950 hover:opacity-50 hover:bg-slate-100 hover:py-2 hover:px-4 hover:rounded transition-all delay-75 ease-in-out "
              key={index}
              type="button"
              name="category"
              value={curElem}
              onClick={updateFilterValue}
            >
              {curElem}
            </button>
          );
        })}
      </div>
      <div className="my-4">
        <div className="font-medium text-white uppercase mb-2">Company</div>
        <div className="">
          <form action="#">
            <label htmlFor=""></label>
            <select
              className="text-gray-400 p-1 rounded-3xl text-center uppercase mt-2 w-full"
              name="company"
              onClick={updateFilterValue}
            >
              {companyData.map((curElem, index) => {
                return (
                  <option key={index} value={curElem} name="company">
                    {curElem}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      </div>
      <div className="">
        <div className="font-medium text-white uppercase mb-2">Colors</div>
        <div className="flex items-center gap-2 py-1 px-4 rounded-3xl bg-slate-100">
          {colorsData.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  type="button"
                  name="color"
                  value={curColor}
                  key={index}
                  className="flex items-start mr-2 font-semibold hover:opacity-50"
                  onClick={updateFilterValue}
                >
                  All
                </button>
              );
            }
            return (
              <button
                type="button"
                name="color"
                value={curColor}
                key={index}
                className="rounded-full w-5 h-5 p-1 bg-red-500 flex items-center justify-center hover:opacity-50"
                style={{ backgroundColor: curColor }}
                onClick={updateFilterValue}
              >
                {color === curColor ? <TiTick className="text-white" /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={clearFilters}
          className="py-2 px-4 text-sm font-josefin font-light rounded uppercase bg-slate-500 hover:opacity-60 text-white transition-all
        duration-75 ease-in-out"
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default FilteredSection;
