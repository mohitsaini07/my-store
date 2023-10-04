import { FcInTransit, FcLock, FcDebt } from "react-icons/fc";

const Services = () => {
  return (
    <>
      <div className="flex items-center md:flex-row flex-col justify-center gap-4 py-10 font-poppins bg-gradient-to-l from-gray-700 via-gray-900 to-black text-sm">
        <div className="bg-blue-50 rounded-lg grid place-items-center w-80 h-48 p-11 hover:bg-teal-200 cursor-pointer hover:scale-[1.03] transition-all 0.3s ease-in">
          <FcInTransit className="bg-white rounded-full p-2 w-10 h-10" />
          <div>Super Fast and Free Delivery</div>
        </div>
        <div className="grid place-items-center gap-1 my-4">
          <div className="flex items-center justify-center gap-4 bg-blue-50 p-10 rounded-lg w-full h-24 hover:bg-teal-200 cursor-pointer hover:scale-[1.03] transition-all 0.3s ease-in">
            <FcLock className="bg-white rounded-full p-2 w-12 h-10" />
            <div>Non-contact Shipping</div>
          </div>
          <div className="flex items-center justify-center gap-4 bg-blue-50 p-10 rounded-lg w-full h-24 hover:bg-teal-200 cursor-pointer hover:scale-[1.03] transition-all 0.3s ease-in">
            <FcDebt className="bg-white rounded-full p-2 w-12 h-10" />
            <div>Money-back Guaranteed</div>
          </div>
        </div>
        <div className="bg-blue-50 rouned-lg grid place-items-center w-80 h-48 p-11 rounded-lg hover:bg-teal-200 cursor-pointer hover:scale-[1.03] transition-all 0.3s ease-in">
          <FcInTransit className="bg-white rounded-full p-2 w-10 h-10" />
          <div>Security at its Ease</div>
        </div>
      </div>
    </>
  );
};

export default Services;
