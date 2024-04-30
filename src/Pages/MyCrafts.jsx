import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import CraftCard from "./CraftCard";
import { Helmet } from "react-helmet";

const MyCrafts = () => {
  const { user } = useAuth();

  const [refresh, setRefresh] = useState(false);

  const [items, setItems] = useState([]);

  const [selectedFilter, setSelectedFilter] = useState("");

  const [filterData, setFilterData] = useState(items);

  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFilterData(data);
      });
  }, [user, refresh]);

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
        <title>My Crafts | ArtFusion</title>
      </Helmet>
      <div className="text-center mb-10 md:mb-14">
        <h3 className="text-2xl md:text-4xl font-bold mb-3">
          My Art & Craft List
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

      {/* Cards */}
      {items.length > 0 ? (
        <div
          // data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {filterData.map((item) => (
            <CraftCard
              key={item._id}
              item={item}
              refresh={refresh}
              setRefresh={setRefresh}
            ></CraftCard>
          ))}
        </div>
      ) : (
        <div className="text-2xl text-center mb-48 font-medium">
          You didn't added any items. Please add items!
        </div>
      )}
    </div>
  );
};

export default MyCrafts;
