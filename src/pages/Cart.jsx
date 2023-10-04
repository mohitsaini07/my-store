import { useCartContext } from "../context/cartContext";
import CartItem from "../component/CartItem";
import { Link } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Cart = () => {
  const { cart, clearCart, totalPrice, shippingFee } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center py-40 max-w-full h-[444px]">
        <div className=" font-bold uppercase text-4xl font-poppins bg-teal-300 p-2 rounded text-white">
          No item in cart
        </div>
      </div>
    );
  }
  return (
    <div className="md:py-40 py-32 flex items-center justify-center font-poppins bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 ">
      <div className="max-w-full space-y-4">
        <div className="grid md:grid-cols-5 grid-cols-3 md:gap-0 gap-10 place-items-center uppercase font-poppins">
          <div>item</div>
          <div className="md:block hidden">Price</div>
          <div className="md:ml-0 ml-16">Quantity</div>
          <div className="md:block hidden">Subtotal</div>
          <div>Remove</div>
        </div>
        <hr />

        <div className="md:pl-0 pl-20 md:w-[1200px] ">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr />
        <div className="flex items-center justify-between md:px-0 px-5 py-5">
          <Link to="/product">
            <button className="bg-teal-500 py-2 px-4 text-white uppercase text-sm rounded-sm hover:opacity-75">
              Continue Shopping
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="bg-teal-500 py-2 px-4  text-white uppercase text-sm rounded-sm border-2 hover:bg-transparent hover:border-2 hover:border-teal-500 hover:text-black transition-all duration-100 ease-in-out"
          >
            Clear Cart
          </button>
        </div>
        <div className="shadow-lg text-slate-600 md:w-72 w-96 h-44 rounded p-4 md:mx-0 mx-auto">
          <div className="w-52 mx-auto">
            <div className="flex gap-12">
              <p>Subtotal:</p>
              <p className="font-medium">
                <FormatPrice price={totalPrice} />
              </p>
            </div>
            <div className="flex gap-8">
              <p>Shipping Fee:</p>
              <p className="font-medium">
                <FormatPrice price={shippingFee} />
              </p>
            </div>
            <hr className="border-2 border-slate-400 rounded opacity-75 my-5" />
            <div className="flex gap-20">
              <p>Total:</p>
              <p className="font-medium">
                <FormatPrice price={totalPrice + shippingFee} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
