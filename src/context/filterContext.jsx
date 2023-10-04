import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  gridView: true,
  sortingValue: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
  },
};

// eslint-disable-next-line react/prop-types
export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  //   To set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };
  // To set the List View
  const setListView = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  };

  //Sorting Function
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  //Update the filter values for search
  const updateFilterValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    return dispatch({
      type: "UPDATE_FILTER_VALUE",
      payload: {
        name,
        value,
      },
    });
  };

  //To clear the filter
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  //To sort the Products
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sortingValue, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFilterContext = () => {
  return useContext(FilterContext);
};
