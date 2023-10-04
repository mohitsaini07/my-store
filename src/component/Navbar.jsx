import { Link } from "react-router-dom";
import { FaCartShopping, FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";
import Button from "./Btn";
import { useCartContext } from "../context/cartContext";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  const { totalItem } = useCartContext();

  return (
    <>
      <nav className="fixed shadow-lg font-josefin z-20 w-full">
        <div className="px-5 xl:px-12 py-7 md:flex md:items-center bg-gradient-to-r from-gray-800 to-black">
          <Link className="uppercase text-xl font-bold text-white" to="/">
            My<span className="text-teal-500">Store</span>
          </Link>
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className="md:hidden my-4 text-xl absolute right-10 top-4 text-white"
          >
            {open ? <FaXmark /> : <FaBars />}
          </div>

          {/* <!-- Nav Links --> */}
          <div
            className={`md:flex md:items-center scroll-smooth md:static md:justify-between absolute left-0 md:ml-[39rem] md:pl-0 w-full md:shadow-none shadow-lg  md:pb-0 pb-6 pl-5 backdrop-blur-lg ${
              open ? "top-20" : "top-[-500px]"
            }`}
          >
            <ul className="md:flex md:items-center md:py-0 pb-6 md:px-4 text-sm uppercase md:space-x-6 mr-20 text-white font-semibold">
              <li className="hover:bg-slate-200 hover:text-black py-2 px-4 rounded transition-all duration-75 ease-in-out  cursor-pointer mt-2">
                <Link to="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="hover:bg-slate-200 hover:text-black py-2 px-4 rounded transition-all duration-75 ease-in-out cursor-pointer mt-2">
                <Link to="/about" onClick={() => setOpen(false)}>
                  About
                </Link>
              </li>
              <li className="hover:bg-slate-200 hover:text-black py-2 px-4 rounded transition-all duration-75 ease-in-out cursor-pointer mt-2">
                <Link to="/product" onClick={() => setOpen(false)}>
                  Products
                </Link>
              </li>
              <li className="hover:bg-slate-200 hover:text-black py-2 px-4 rounded transition-all duration-75 ease-in-out cursor-pointer mt-2">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>

            {/* <!-- Nav Links End --> */}

            {/* <-- Button --> */}
            <div className="flex items-center space-x-5">
              <Link to="/login">
                <Button name="Login" />
              </Link>

              {/* <-- Button End  --> */}

              {/* <!-- Cart Icon --> */}
              <Link className="relative" to="/cart">
                <FaCartShopping className="cursor-pointer text-white hover:text-teal-400 hover:-translate-y-2 text-2xl transition-all duration-100 ease-in-out" />
                <span className="absolute w-5 h-5 rounded-full bg-white text-xs -top-2 -right-2 flex items-center justify-center">
                  {totalItem}
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="absolute top-12 left-0 mb-4 mr-4 z-10">
          <Link to="">
            <img
              className="object-cover object-center w-16 h-16 rounded-full hover:scale-[1.1] hover:shadow-md hover:shadow-sky-400 transition-all 0.3s ease-in cursor-pointer"
              src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
            />
          </Link>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
