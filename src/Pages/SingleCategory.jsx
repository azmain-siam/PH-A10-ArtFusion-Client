import { Helmet } from "react-helmet";
import { FaStar } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { Link, useLoaderData, useParams } from "react-router-dom";

const SingleCategory = () => {
  const items = useLoaderData();
  console.log(items);
  const category = useParams();
  return (
    <div className="max-w-7xl w-[93%] md:w-[93%] mx-auto mb-10">
      <Helmet>
        <title>Category | ArtFusion</title>
      </Helmet>
      <div className="text-center my-10 md:my-10">
        <h3 className="text-2xl md:text-4xl font-bold mb-3">
          {category.category}s
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {items.map((item) => (
          <div key={item._id}>
            <div className="group/item cursor-default card rounded-xl w-full max-w-[420px] mx-auto h-full border shadow-md hover:shadow-xl duration-300">
              <figure className="relative">
                <div className="w-full h-[200px] md:h-[230px] overflow-hidden">
                  <img
                    className="w-full h-full group-hover/item:scale-110 duration-700 object-cover"
                    src={item.photoURL}
                  />
                </div>
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title font-bold capitalize">
                  {item.itemName}
                </h2>

                <p className="font-medium text-[#585858]">{item.description}</p>
                <h3 className="font-semibold text-lg">
                  Category: {item.category}
                </h3>
                <hr className="my-1" />
                <div className="text-[15px] flex gap-1 justify-between flex-wrap">
                  <div className="flex gap-1 items-center">
                    <FaStar size={19} color="#ffa534" />
                    <p className="font-medium mt-[2px]">
                      Rating: {item.rating}
                    </p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <IoTimerOutline size={19} color="#0047AB" />
                    <p className="font-medium mt-[2px]">
                      Proccessing Time: {item.processing_time}
                    </p>
                  </div>
                </div>
                <hr className="my-1" />
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">
                    Customization: {item.customization}
                  </h3>
                  <h3 className="font-bold text-2xl md:text-3xl">
                    ${item.price}.00
                  </h3>
                </div>
                <hr className="my-1" />
                <div className="mt-1">
                  <Link to={`/items/details/${item._id}`}>
                    <button className="btn min-w-full bg-[#E56997] border-[#E56997] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
                      show details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCategory;
