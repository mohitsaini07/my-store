/* eslint-disable react/prop-types */

const Btn = (props) => {
  return (
    <>
      <div className="transition-all 1s ease-in-out hover:translate-y-1  text-white uppercase cursor-pointer">
        <button
          className="bg-teal-500 py-2 px-3 text-sm rounded uppercase hover:shadow-lg hover:shadow-teal-500 overflow-hidden"
          to="/login"
        >
          {props.name}
        </button>
      </div>
    </>
  );
};

export default Btn;
