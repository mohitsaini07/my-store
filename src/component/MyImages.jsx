import { useState } from "react";

// eslint-disable-next-line react/prop-types
const MyImages = ({ images = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center md:gap-0 gap-4">
        <div className="grid md:grid-cols-1 grid-cols-4 gap-1 place-items-center md:px-0 px-4">
          {images.map((curElem, index) => {
            return (
              <img
                className="w-40 md:h-28 h-16 object-cover md:hover:-translate-x-4 hover:-translate-y-4 rounded transition-all duration-500 ease-in-out cursor-pointer"
                src={curElem.url}
                alt={curElem.filename}
                key={index}
                onClick={() => {
                  setMainImage(curElem);
                }}
              />
            );
          })}
        </div>
        <div className="w-[400px] h-auto ">
          <img
            src={mainImage.url}
            alt={mainImage.filename}
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
    </>
  );
};

export default MyImages;
