import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import CraftCard from "./CraftCard";

const MyCrafts = () => {
  const { user } = useAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user.email}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);
  return (
    <div className="my-5 max-w-7xl w-[95%] md:w-[93%] mx-auto mt-10 md:mt-14">
      <div id="estates" className="text-center mb-10 md:mb-14">
        <h3 className="text-2xl md:text-4xl font-bold mb-3">
          My Art & Craft List
        </h3>
      </div>

      {/* Cards */}
      {items.length > 0 ? (
        <div
          // data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {items.map((item) => (
            <CraftCard key={item._id} item={item}></CraftCard>
          ))}
        </div>
      ) : (
        <div className="text-2xl text-center mb-48 font-medium">List is empty. Please add items!</div>
      )}
    </div>
  );
};

export default MyCrafts;
