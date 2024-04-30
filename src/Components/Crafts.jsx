import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";

const Crafts = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  console.log(items);

  const displayedItems = items.slice(0, 8);
  return (
    <div className="my-5 max-w-7xl w-[95%] md:w-[93%] mx-auto mt-10 md:mt-14">
      <div className="text-center mb-10 md:mb-14">
        <h3 className="text-2xl md:text-4xl font-bold mb-3">Craft Items</h3>
        <div className="w-32 md:w-40 h-[3px] bg-[#E56997] mx-auto mb-5"></div>
        <p className="text-[#585858] text-sm md:text-base w-[90%] md:w-[600px] lg:w-[800px] mx-auto">
          Explore a curated selection of exquisite residential properties,
          ranging from luxurious villas to cozy cottages, tailored to suit every
          lifestyle and preference.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {displayedItems.map((item) => (
          <div key={item._id}>
            <div
              data-aos="fade-up"
              className="group/item cursor-default card rounded-xl w-full max-w-[420px] mx-auto h-full border shadow-md hover:shadow-xl duration-300"
            >
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
                  <h3 className="font-bold text-4xl">
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

export default Crafts;
