import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddCraft = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const handleAdd = (data) => {
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
    } = data;
    const email = user.email;
    const info = {
      itemName,
      stockStatus,
      category,
      customization,
      photoURL,
      price,
      processing_time,
      rating,
      email,
      description,
    };

    // send info to the server
    fetch("https://a10-art-fusion-server.vercel.app/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Item Added Successfully!",
          });
        }
      });

    reset();
  };

  return (
    <div className="mb-5 mt-10 max-w-7xl w-[95%] md:w-[93%] mx-auto">
      <Helmet>
        <title>Add Craft | ArtFusion</title>
      </Helmet>
      <div className="mb-10 md:mb-14">
        <h3 className="text-2xl text-center md:text-4xl font-bold mb-8">
          <span className="text-[#E56997]">Add</span> Craft Items
        </h3>
        <form
          onSubmit={handleSubmit(handleAdd)}
          className="card-body p-5 md:px-14 md:py-8 w-full border rounded-xl"
        >
          <div className="grid grid-cols-2 gap-10">
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Username
                </span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                defaultValue={user.displayName}
                className="input focus:outline-none focus:border bg-[#EEEDEE]"
                required
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Email
                </span>
              </label>
              <input
                type="text"
                placeholder="Your Email"
                defaultValue={user.email}
                disabled
                className="input focus:outline-none focus:border bg-[#EEEDEE]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Item Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Item Name"
                className="input focus:outline-none focus:border bg-[#EEEDEE]"
                required
                {...register("itemName")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Stock Status
                </span>
              </label>
              <select
                required
                {...register("stockStatus")}
                className="select font-medium text-base *:font-medium focus:outline-none focus:border bg-[#EEEDEE]"
              >
                <option disabled selected>
                  Select an option
                </option>
                <option>In Stock</option>
                <option>Made to Order</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Category
                </span>
              </label>
              <select
                {...register("category")}
                required
                className="select font-medium text-base *:font-medium focus:outline-none focus:border bg-[#EEEDEE]"
              >
                <option disabled selected>
                  Select a Category
                </option>
                <option>Landscape Painting</option>
                <option>Portrait Drawing</option>
                <option>Watercolour Painting</option>
                <option>Oil Painting</option>
                <option>Charcoal Sketching</option>
                <option>Cartoon Drawing</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Price
                </span>
              </label>
              <input
                type="number"
                {...register("price")}
                placeholder="Price"
                required
                className="input focus:outline-none focus:border bg-[#EEEDEE]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Image URL
                </span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                {...register("photoURL")}
                className="input focus:outline-none focus:border bg-[#EEEDEE]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Rating
                </span>
              </label>
              <input
                type="text"
                {...register("rating")}
                placeholder="Rating"
                className="input focus:outline-none focus:border bg-[#EEEDEE]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Processing Time
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Processing Time"
                {...register("processing_time")}
                className="input focus:outline-none focus:border bg-[#EEEDEE]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Customization
                </span>
              </label>
              <select
                {...register("customization")}
                className="select font-medium text-base *:font-medium focus:outline-none focus:border bg-[#EEEDEE]"
              >
                <option disabled selected>
                  Select an option
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">
                Description
              </span>
            </label>
            <textarea
              rows="3"
              {...register("description")}
              placeholder="Write a Description..."
              required
              className="textarea focus:outline-none focus:border bg-[#EEEDEE] text-base"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-[#E56997] border-[#E56997] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
              Add This Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCraft;
