/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";


const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, colors, stock } = product;

  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <>
      <div className="flex items-center">
        Colors:
        {colors.map((curColor, index) => {
          return (
            <button
              onClick={() => {
                setColor(curColor);
              }}
              key={index}
              className={
                color === curColor
                  ? "w-5 h-5 text-center rounded-full ml-2 opacity-[1] cursor-pointer flex items-center justify-center "
                  : "w-5 h-5 rounded-full bg-black ml-2 opacity-[0.5] cursor-pointer flex items-center justify-center"
              }
              style={{ backgroundColor: curColor }}
            >
              {color === curColor ? (
                <FaCheck className="text-sm text-white" />
              ) : null}
            </button>
          );
        })}
      </div>

      {/* Add to Cart  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <Link
        to="/cart"
        className="mt-2"
        onClick={() => addToCart(id, color, amount, product, stock)}
      >
        <button className="p-2 outline-none bg-black text-white uppercase text-sm rounded-sm hover:border-2 hover:border-black hover:bg-transparent hover:text-black border-2 transition-all duration-100 ease-in-out">
          Add To Cart
        </button>
      </Link>
    </>
  );
};

export default AddToCart;
