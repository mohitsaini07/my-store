import Btn from "./Btn";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const subscription = () => toast("Subscription Added Successfully");

  return (
    <>
      <div className="relative flex justify-center w-full font-poppins">
        <div className="absolute -top-12 flex items-center justify-between md:flex-row flex-col w-1/2 p-6 md:px-20 px-10 text-center bg-gray-100 rounded">
          <div>
            <div className="font-semibold">Ready to get started?</div>
            <div className="font-semibold text-gray-500">Talk to us today</div>
          </div>
          <div className="md:mt-0 mt-5">
            <Btn name="Get Started" />
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-0 gap-10 place-items-center bg-gradient-to-b from-gray-600 via-gray-700 to-gray-900 text-white py-20 px-32 text-sm  w-full">
          <div className="md:mt-0 mt-20 text-center">
            <div>Mohit Saini</div>
            <div>Khurja, Bsr, Up</div>
          </div>
          <div className="space-y-5 text-center">
            <div>Subscribe to get important updates</div>
            <input
              className="p-2 border-2 text-sm rounded text-gray-600"
              placeholder="E-Mail"
              type="email"
            />
            <button className="border-2 border-teal-500 bg-teal-500 rounded ml-2 py-2 px-4 uppercase" onClick={subscription}>Subscribe</button>
            <ToastContainer
              position="top-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
          <div className="space-y-5 text-center">
            <div>Follow Us</div>
            <div className="flex items-center gap-2 text-2xl">
              <Link to="#">
                <FaInstagram className="cursor-pointer" />
              </Link>
              <Link to="#">
                <FaLinkedin className="cursor-pointer" />
              </Link>
              <Link to="#">
                <FaYoutube className="cursor-pointer" />
              </Link>
            </div>
          </div>
          <div className="space-y-5 text-center">
            <div>Call Us</div>
            <div>+91 123134354</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
