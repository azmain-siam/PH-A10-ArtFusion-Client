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
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title font-bold capitalize">{itemName}</h2>

          <p className="font-medium text-[#585858]">{description}</p>
          <h3 className="font-semibold">Facilities:</h3>

          <hr className="my-1" />

          <div className="flex gap-2 mt-1">
            <Link to={`/items/update/${_id}`} className="flex-1">
              <button className="btn w-full bg-[#E56997] border-[#E56997] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
                edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn flex-1 bg-[#E56997] border-[#E56997] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105"
            >
              delete
            </button>
            <Link to={`/items/details/${_id}`}>
              <button className="btn min-w-full bg-[#E56997] border-[#E56997] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
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
