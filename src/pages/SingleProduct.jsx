import { useParams } from "react-router";
import { useProductContext } from "../context/ProductContext";
import { useEffect } from "react";
import FormatPrice from "../Helpers/FormatPrice";
import PageNavigation from "../component/PageNavigation";
import MyImages from "../component/MyImages";
import { TbTruckDelivery, TbReplaceFilled } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "../component/Star";
import AddToCart from "../component/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  let { id } = useParams();

  const { name, price, description, stock, stars, reviews, image, company } =
    singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:py-24 py-20 font-poppins bg-gradient-to-r from-gray-100 to-gray-300">
      <PageNavigation title={name} />
      <div className="w-full flex items-center justify-center pt-10 md:px-32">
        <div className="grid md:grid-cols-2 md:gap-20 gap-10">
          <div className="">
            <MyImages images={image} />
          </div>
          <div className="grid md:px-0 px-4 gap-2">
            <div className="capitalize font-semibold text-xl">{name}</div>
            <Star stars={stars} reviews={reviews} />
            <div className="text-gray-600F">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </div>
            <div className="text-blue-500">
              Deal of the Day: <FormatPrice price={price} />
            </div>
            <div className="text-sm text-gray-600 text-justify">
              {description}
            </div>
            <div className="grid grid-cols-4 mt-4">
              <div className="grid place-items-center gap-2">
                <TbTruckDelivery className="flex items-center justify-center w-8 h-8 p-1 object-cover bg-white rounded-full" />
                <div className="text-xs text-gray-700 ">Free Delivery</div>
              </div>
              <div className="grid place-items-center gap-2 text-center">
                <TbReplaceFilled className="flex items-center justify-center w-8 h-8 p-1 object-cover bg-white rounded-full" />
                <div className="text-xs text-gray-700 ">
                  20 Days Replacement
                </div>
              </div>
              <div className="grid place-items-center gap-2">
                <MdSecurity className="flex items-center justify-center w-8 h-8 p-1 object-cover bg-white rounded-full" />
                <div className="text-xs text-gray-700 ">2 Year Warranty</div>
              </div>
              <div className="grid place-items-center gap-2">
                <TbTruckDelivery className="flex items-center justify-center w-8 h-8 p-1 object-cover bg-white rounded-full" />
                <div className="text-xs text-gray-700 ">MyStore Delivered</div>
              </div>
            </div>
            <div className="text-gray-700 mt-2">
              Availale:
              <span className="font-medium">
                {stock > 0 ? " In Stock" : " Not Available"}
              </span>
            </div>
            <div>
              Brand: <span className="capitalize font-medium"> {company}</span>
            </div>
            <hr className="max-w-full border-1 border-black" />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
