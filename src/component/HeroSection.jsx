/* eslint-disable react/prop-types */
import Button from "./Btn";
import { Link } from "react-router-dom";

const HeroSection = ({ myData }) => {
  const { firstName, lastName, imgsrc } = myData;

  return (
    <>
      <div className="relative w-full h-screen md:flex items-center md:justify-center bg-gradient-to-r from-gray-700 via-gray-900 to-black gap-20 pt-28 md:px-0 px-10 font-poppins">
        <div className="flex flex-col gap-2 sm:justify-center text-white">
          <div className="uppercase font-semibold text-lg">Welcome to</div>
          <div className="md:text-6xl text-4xl uppercase font-bold">
            {firstName}
            <span className="">{lastName}</span>
          </div>
          <div className="md:w-96 mb-4 text-justify font-josefin font-light">
            Your one-stop destination for an exceptional online shopping
            experience. Explore a diverse range of products, from cutting-edge
            electronics to fashionable apparel, all at your fingertips.
          </div>
          <Link to="/product">
            <Button name="Shop now" />
          </Link>
        </div>
        <div className="relative flex justify-center">
          <img
            className="rounded w-full md:w-96 md:h-72 md:mt-0 mt-20"
            src={imgsrc}
            alt=""
          />
          {/* <div className="w-96 h-60 absolute bg-slate-200 -top-8 right-10 -z-10 rounded"></div> */}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
