import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const MyCrafts = () => {
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user.email}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [user]);
  return (
    <div className="mb-5 mt-10 max-w-7xl w-[95%] md:w-[93%] mx-auto">
      My Cart
    </div>
  );
};

export default MyCrafts;
