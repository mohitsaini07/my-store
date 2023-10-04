import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const Star = ({ stars, reviews }) => {
  const starRating = Array.from({ length: 5 }, (e, index) => {
    let number = index + 0.5;
    return (
      <div key={index}>
        {stars >= index + 1 ? (
          <FaStar />
        ) : stars >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </div>
    );
  });

  return (
    <>
      <div className="flex items-center gap-2">
        <div className="flex text-yellow-500">{starRating}</div>
        <div className="text-sm">({reviews} customer reviews)</div>
      </div>
    </>
  );
};

export default Star;
