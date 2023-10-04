/* eslint-disable react/prop-types */
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div>
      <div className="flex items-center gap-4 mt-2">
        <button onClick={() => setDecrease()}>
          <FaMinus className="bg-black text-white p-1 rounded-full hover:opacity-75 w-6 h-5" />
        </button>
        <div className="">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus className="bg-black text-white p-1 rounded-full hover:opacity-75 w-6 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
