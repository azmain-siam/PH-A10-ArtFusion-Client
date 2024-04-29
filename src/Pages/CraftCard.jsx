import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CraftCard = ({ item }) => {
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
    _id,
  } = item;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/items/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

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
              src={photoURL}
            />
          </div>
          {/* <div
            className={`absolute bottom-0 right-0 z-10 text-white px-4 py-1 ${
              status === "Sale" ? "bg-[#5EA51C]" : "bg-[#F95C64]"
            } font-medium`}
          >
            <span>
              {status}: {price}
            </span>
          </div> */}
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title font-bold capitalize">{itemName}</h2>

          <p className="font-medium text-[#585858]">{description}</p>
          <h3 className="font-semibold">Facilities:</h3>
          {/* <ul className="text-sm text-[#585858] list-disc">
            {facilities.map((facility) => (
              <li className="ml-7" key={facility}>
                {facility}
              </li>
            ))}
          </ul> */}
          <hr className="my-1" />
          <div className="text-sm flex flex-wrap justify-between  items-center text-[#585858]">
            {/* <div className="flex gap-1 items-center">
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
            </div> */}
          </div>
          <div>
            <Link to={`/items/update/${_id}`}>
              <button className="btn w-full mt-2 bg-[#E56997] border-[#E56997] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
                edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn w-full mt-2 bg-[#E56997] border-[#E56997] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105"
            >
              delete
            </button>
            <Link>
              <button className="btn w-full mt-2 bg-[#E56997] border-[#E56997] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
                show details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftCard;
