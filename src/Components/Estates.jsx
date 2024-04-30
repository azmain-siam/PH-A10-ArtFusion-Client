import PropTypes from "prop-types";
import EstateCard from "./EstateCard";

const Estates = ({ estates }) => {
  return (
    <div className="my-5 max-w-7xl w-[95%] md:w-[93%] mx-auto mt-10 md:mt-14">
      <div id="estates" className="text-center mb-10 md:mb-14">
        <h3 className="text-2xl md:text-4xl font-bold mb-3">Estates</h3>
        <p className="text-[#585858] text-sm md:text-base w-[90%] md:w-[600px] lg:w-[800px] mx-auto">
          Explore a curated selection of exquisite residential properties,
          ranging from luxurious villas to cozy cottages, tailored to suit every
          lifestyle and preference.
        </p>
      </div>

      {/* Cards */}
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
      >
        {estates.map((estate) => (
          <EstateCard key={estate.id} estate={estate}></EstateCard>
        ))}
      </div>
    </div>
  );
};

export default Estates;

Estates.propTypes = {
  estates: PropTypes.array,
};
