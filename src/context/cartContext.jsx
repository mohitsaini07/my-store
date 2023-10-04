/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  const localCartData = localStorage.getItem("Cart");
  if (!localCartData) {
    return [];
  }
  return JSON.parse(localCartData);
};

const initialState = {
  cart: getLocalCartData(),
  totalItem: "",
  totalPrice: 0,
  shippingFee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  // Cart increment or decrement

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREASE", payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREASE", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // To clear the Cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // To add the data on localStorage
  useEffect(() => {
    dispatch({ type: "TOTAL_PRICE_ITEM" });
    localStorage.setItem("Cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
