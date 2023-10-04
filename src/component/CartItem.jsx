import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartContext";

// eslint-disable-next-line react/prop-types
const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setIncrease, setDecrease } = useCartContext();

  const setDecrement = () => {
    setDecrease(id);
  };

  const setIncrement = () => {
    setIncrease(id);
  };

  return (
    <div className="grid md:grid-cols-5 grid-cols-3 place-items-center mb-3">
      <div className="flex flex-row items-center md:justify-normal justify-center gap-2">
        <img className="w-20 h-14 object-cover" src={image} alt={id} />
        <div className="mr-20">
          <div className="md:text-base text-sm font-medium capitalize">{name}</div>
          <div className="flex items-center md:text-base text-sm">
            <div className="mr-2">Color: </div>
            <div
              className="md:w-5 md:h-5 w-4 h-4 rounded-full"
              style={{ backgroundColor: color, color: color }}
            >
              {color === color ? "" : null}
            </div>
          </div>
        </div>
      </div>
      <div className="md:block hidden">
        <FormatPrice price={price} />
      </div>
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrement}
        setIncrease={setIncrement}
      />
      <div className="md:block hidden">
        <FormatPrice price={price * amount} />
      </div>
      <div className="">
        <FaTrash
          className="cursor-pointer text-red-500"
          onClick={() => removeItem(id)}
        />
      </div>
    </div>
  );
};

export default CartItem;
