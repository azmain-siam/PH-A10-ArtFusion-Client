import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { useState } from "react";

const AllCrafts = () => {
  const items = useLoaderData();

  const [selectedFilter, setSelectedFilter] = useState("");

  const [filterData, setFilterData] = useState(items);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedFilter(value);
    if (value == "All") {
      setFilterData(items);
    } else if (value === "Customizable") {
      const newItems = items.filter((item) => item.customization == "Yes");
      setFilterData(newItems);
    } else if (value === "Not Customizable") {
      const newItems = items.filter((item) => item.customization == "No");
      setFilterData(newItems);
    }
  };

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
      <div className="text-center mb-5">
        <select
          className="select select-bordered  w-full max-w-xs"
          value={selectedFilter}
          onChange={handleChange}
        >
          <option>All</option>
          <option>Customizable</option>
          <option>Not Customizable</option>
        </select>
      </div>
      <div className="overflow-x-auto border border-[#e4e4e4] rounded-lg">
        <table className="table">
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
            {filterData.map((item) => (
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
