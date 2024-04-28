import { Helmet } from "react-helmet";
import { FaBath, FaBed, FaLocationDot, FaRulerCombined } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";

import { Link, useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const estate = estates.find((e) => e.id == id);
  console.log(estate);
  const {
    estate_title,
    description,
    price,
    status,
    area,
    bedrooms,
    bathrooms,
    facilities,
    image,
    description_2,
    location,
    highlight_features,
  } = estate;

  return (
    <div className="max-w-7xl w-[93%] md:w-[93%] mx-auto mt-4 mb-14">
      <Helmet>
        <title>Details | ArtFusion</title>
      </Helmet>
      <div className="w-full h-[240px] md:h-[400px] lg:h-[550px] rounded-xl overflow-hidden cursor-pointer mb-8">
        <img
          className="object-cover w-full h-full hover:scale-105 duration-700 transition-all"
          src={image}
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:items-center mb-6 md:mb-10">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-3 items-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
              {estate_title}
            </h3>
            <div className="flex gap-1 items-center">
              <div
                className={`h-3 md:h-4 w-3 md:w-4 rounded-full ${
                  status === "Sale" ? "bg-[#24801F] " : "bg-[#F95C64]"
                }`}
              ></div>
              <h3 className="text-sm md:text-base font-semibold md:pt-[2px]">
                For {status}
              </h3>
            </div>
          </div>
          <p className="font-medium text-[#585858]  text-sm md:text-lg">
            {description}{" "}
          </p>
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold">Price: {price}</h3>
      </div>
      <div className="space-y-7 mb-8">
        <div>
          <h3 className="text-xl lg:text-2xl font-semibold mb-2">
            Description
          </h3>
          <p className="font-medium text-[#585858] text-sm md:text-lg">
            {description_2}
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-xl lg:text-2xl font-semibold mb-4">
          Home Details for {estate_title}
        </h3>

        {/* Details */}
        <div className="w-full border rounded-lg">
          <h3 className="bg-[#F5F6F7] px-5 py-3 text-lg font-semibold border-b">
            Features
          </h3>
          <div className="px-5 py-4 border-b">
            <h3 className="md:text-lg font-semibold mb-2">Location:</h3>
            <div className="ml-3 grid md:grid-cols-3 gap-2 text-sm md:text-base">
              <div className="flex gap-2 items-center ">
                <FaLocationDot size={18} />
                <p className="font-medium pt-[2px]">{location}</p>
              </div>
            </div>
          </div>
          <div className="px-5 py-4 border-b">
            <h3 className="md:text-lg font-semibold mb-2">
              Beds & Bathrooms:{" "}
            </h3>
            <div className="ml-3 grid md:grid-cols-3 gap-2 text-sm md:text-base">
              <div className="flex gap-2 items-center ">
                <FaBed />
                <p className="font-medium">{bedrooms} Bedrooms</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaBath />
                <p className="font-medium">{bathrooms} Bathrooms</p>
              </div>
            </div>
          </div>
          <div className="px-5 py-4 border-b">
            <h3 className="md:text-lg font-semibold mb-2">
              Dimensions and Layout:
            </h3>
            <div className="ml-3 space-y-2 text-sm md:text-base">
              <div className="flex gap-2 items-center">
                <FaRulerCombined />
                <p className="font-medium">Living Area: {area}</p>
              </div>
            </div>
          </div>
          <div className="px-5 py-4 border-b">
            <h3 className="md:text-lg font-semibold mb-2">Facilities:</h3>
            <div>
              <ul className="space-y-2 text-sm md:text-base">
                {facilities.map((facility) => (
                  <li className="list-disc ml-8 font-medium" key={facility}>
                    {facility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="px-5 py-4">
            <h3 className="md:text-lg font-semibold mb-2">
              Highlighted Features:
            </h3>
            <div>
              <ul className="space-y-2 text-sm md:text-base">
                {highlight_features.map((highlight) => (
                  <li className="list-disc ml-8 font-medium" key={highlight}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-2">
          <BiSolidPhoneCall size={36} />
          <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">
            Want to {status == "Sale" ? "Buy" : "take Rent"}?{" "}
            <Link
              to={"/contact"}
              className="underline font-bold italic underline-offset-[5px] text-[#E56997]"
            >
              Contact With Buider!
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
