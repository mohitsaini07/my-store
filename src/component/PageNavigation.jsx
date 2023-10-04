/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const PageNavigation = ({ title }) => {
  return (
    <>
      <div className="font-poppins w-full">
        <Link className="text-blue-500 " to="/">
          Home
        </Link>
        /{title}
      </div>
    </>
  );
};

export default PageNavigation;
