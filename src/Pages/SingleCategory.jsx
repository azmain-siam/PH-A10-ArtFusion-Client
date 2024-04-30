import { Link, useLoaderData } from "react-router-dom";

const SingleCategory = () => {
  const items = useLoaderData();

  return (
    <div>
      <div className="text-center mb-10 md:mb-14">
        <h3 className="text-2xl md:text-4xl font-bold mb-3">Category: {}</h3>
      </div>
      {items.map((item) => (
        <div
          key={item._id}
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
            <h2 className="card-title font-bold capitalize">{item.itemName}</h2>

            <p className="font-medium text-[#585858]">{item.description}</p>
            <h3 className="font-semibold mt-3 text-lg">
              Customization: {item.customization}
            </h3>

            <hr className="my-1" />

            <div className="mt-1">
              <Link to={`/items/details/${item._id}`}>
                <button className="btn w-full bg-[#E56997] border-[#E56997] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
                  show details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleCategory;
