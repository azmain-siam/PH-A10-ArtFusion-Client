import { FaBath, FaRulerCombined, FaBed } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EstateCard = ({ estate }) => {
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
    id,
  } = estate;
  return (
    <div>
      <div
        data-aos="fade-up"
        className="group/item cursor-default card rounded-xl w-full max-w-[420px] mx-auto h-full border shadow-md hover:shadow-xl duration-300"
      >
        <figure className="relative">
          <div className="w-full h-[200px] md:h-[230px] overflow-hidden">
            <img
              className="w-full h-full group-hover/item:scale-110 duration-700 object-cover"
              src={image}
            />
          </div>
          <div
            className={`absolute bottom-0 right-0 z-10 text-white px-4 py-1 ${
              status === "Sale" ? "bg-[#5EA51C]" : "bg-[#F95C64]"
            } font-medium`}
          >
            <span>
              {status}: {price}
            </span>
          </div>
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title font-bold capitalize">{estate_title}</h2>

          <p className="font-medium text-[#585858]">{description}</p>
          <h3 className="font-semibold">Facilities:</h3>
          <ul className="text-sm text-[#585858] list-disc">
            {facilities.map((facility) => (
              <li className="ml-7" key={facility}>
                {facility}
              </li>
            ))}
          </ul>
          <hr className="my-1" />
          <div className="text-sm flex flex-wrap justify-between  items-center text-[#585858]">
            <div className="flex gap-1 items-center">
              <FaBed />
              <p className="font-medium">{bedrooms} Bedrooms</p>
            </div>
            <div className="flex gap-1 items-center">
              <FaBath />
              <p className="font-medium">{bathrooms} Bathrooms</p>
            </div>
            <div className="flex gap-1 items-center">
              <FaRulerCombined />
              <p className="font-medium">{area}</p>
            </div>
          </div>
          <Link to={`/estates/${id}`}>
            <button className="btn w-full mt-2 bg-[#E56997] border-[#E56997] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
              show details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;

EstateCard.propTypes = {
  estate: PropTypes.object,
};
