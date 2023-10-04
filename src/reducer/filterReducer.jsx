/* eslint-disable no-case-declarations */
const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":

      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
        filters: { ...state.filters }
      };
    case "SET_GRIDVIEW":
      return {
        ...state,
        gridView: true,
      };
    case "SET_LISTVIEW":
      return {
        ...state,
        gridView: false,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sortingValue: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      const { filterProducts, sortingValue } = state;
      let tempSortProduct = [...filterProducts];

      const sortingProducts = (a, b) => {
        if (sortingValue === "lowest") {
          return a.price - b.price;
        }
        if (sortingValue === "highest") {
          return b.price - a.price;
        }
        if (sortingValue === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sortingValue === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      newSortData = tempSortProduct.sort(sortingProducts);
      return {
        ...state,
        filterProducts: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { allProducts } = state;
      let tempFilterProduct = [...allProducts];

      const { text, category, company, color } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.category.toLowerCase() === category.toLowerCase();
        });
      }

      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.company.toLowerCase() === company.toLowerCase();
        });
      }

      if (color !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.colors.includes(color);
        });
      }

      return {
        ...state,
        filterProducts: tempFilterProduct,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
        }
      }

    default:
      return state;
  }
};

export default filterReducer;
