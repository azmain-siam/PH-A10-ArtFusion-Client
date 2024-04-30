import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const AllCrafts = () => {
  const items = useLoaderData();

  return (
    <div className="my-5 max-w-7xl w-[95%] md:w-[93%] mx-auto mt-10 md:mt-14">
      <Helmet>
        <title>All Crafts | ArtFusion</title>
      </Helmet>
      <div className="text-center mb-10 md:mb-14">
        <h3 className="text-2xl md:text-4xl font-bold mb-3">
          All Art & Craft List
        </h3>
      </div>
      {/* <div className="flex flex-col border rounded-xl border-[#cacaca]">
        <div className="md:grid hidden bg-[#f0f0f0] rounded-t-xl grid-cols-10 p-5 font-semibold">
          <p className="col-span-1">Image</p>
          <p className="col-span-4">Name</p>
          <p className="col-span-2">Category</p>
          <p className="col-span-2">Price</p>
          <p className="col-span-1">Action</p>
        </div>
        {items.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-5 lg:grid-cols-10 text-sm lg:text-base px-5 py-3 font-medium items-center border-t border-[#cacaca] overflow-auto"
          >
            <div className="col-span-1">
              <img className="w-12" src={item.photoURL} />
            </div>
            <p className="col-span-3 lg:col-span-4">{item.itemName}</p>
            <p className="col-span-1 lg:col-span-2">{item.category}</p>
            <p className="col-span-2">${item.price}</p>
            <Link className="col-span-1">
              <button className="btn bg-[#E56997] border-[#E56997] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
                details
              </button>
            </Link>
          </div>
        ))}
      </div> */}

      <div className="overflow-x-auto border border-[#e4e4e4] rounded-lg">
        <table className="table">
          {/* head */}
          <thead className="text-sm text-[#e95289]">
            <tr className="border-[#e4e4e4]">
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr className="font-semibold border-[#e4e4e4]" key={item._id}>
                <td>
                  <img className="w-12" src={item.photoURL} alt="" />
                </td>
                <td>{item.itemName}</td>
                <td>{item.category}</td>
                <td>${item.price}</td>
                <td>
                  <Link
                    to={`/items/details/${item._id}`}
                    className="col-span-1"
                  >
                    <button className="btn bg-[#E56997] border-[#E56997] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
                      details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCrafts;
