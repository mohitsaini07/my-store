/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Btn from "../component/Btn";
const Error = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col  gap-6 h-1/2 pt-40 md:px-0 px-5  pb-32">
        <div className="text-6xl">404</div>
        <div className="text-2xl text-gray-600">Uh Oh! You're lost</div>
        <div className="text-gray-600 text-center">
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </div>
        <Link to="/">
          <Btn name="Go To Home" />
        </Link>
      </div>
    </>
  );
};

export default Error;
