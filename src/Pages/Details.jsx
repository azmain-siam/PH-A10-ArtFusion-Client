import { Helmet } from "react-helmet";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const item = useLoaderData();
  console.log(item);
  const {
    itemName,
    stockStatus,
    category,
    customization,
    photoURL,
    price,
    processing_time,
    description,
    rating,
  } = item;
  return (
    <div className="max-w-7xl w-[93%] md:w-[93%] mx-auto my-8 flex flex-col lg:flex-row gap-6 items-center">
      <Helmet>
        <title>Details | ArtFusion</title>
      </Helmet>
      <div className="w-full lg:w-[600px] h-[240px] md:h-[400px] lg:h-[550px] rounded-xl overflow-hidden cursor-pointer">
        <img
          className="object-cover w-full h-full hover:scale-105 duration-700"
          src={photoURL}
        />
      </div>
      <div className="w-full px-5 md:px-0 md:flex-1">
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:items-center">
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              {itemName}
            </h3>
            <p className="font-medium text-[#585858] md:text-lg mb-2">
              {description}
            </p>
            <h3 className="font-semibold text-lg">Category: {category}</h3>
          </div>
        </div>
        <hr className="my-4 md:my-5" />
        <div className="flex flex-row-reverse items-center justify-between">
          <h3 className="text-2xl md:text-4xl font-bold">${price}.00</h3>
          <h4 className=" flex items-center gap-1 md:text-xl font-semibold">
            <FaStar size={19} color="#ffa534" />
            {rating}
          </h4>
        </div>
        <hr className="my-4 md:my-5" />
        <div>
          {/* Details */}
          <div className="w-full border rounded-lg">
            <h3 className="bg-[#F5F6F7] px-5 py-3 text-lg font-semibold border-b">
              Other Informations:
            </h3>
            <div className="px-5 py-4 border-b">
              <h3 className="md:text-lg font-semibold">
                Customizable: {customization}
              </h3>
            </div>
            <div className="px-5 py-4 border-b">
              <h3 className="md:text-lg font-semibold">
                Proccessing Time: {processing_time}
              </h3>
            </div>
            <div className="px-5 py-4 border-b">
              <h3 className="md:text-lg font-semibold mb-2">
                Stock Status: {stockStatus}
              </h3>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-2">
            <BiSolidPhoneCall size={36} />
            <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">
              Want to Buy?
              <Link
                to={"/contact"}
                className="underline font-bold italic underline-offset-[5px] text-[#E56997]"
              >
                {" "}
                Contact With Us!
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
