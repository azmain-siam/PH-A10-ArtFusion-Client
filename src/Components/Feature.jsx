/* eslint-disable react/no-unescaped-entities */
import buyHome from "../assets/BuyAHome.svg";
import rentHome from "../assets/RentAHome.svg";
import neighborhood from "../assets/Neighborhoods.svg";

const Feature = () => {
  return (
    <div
      data-aos="fade-up"
      className="max-w-7xl w-[93%] md:w-[93%] mx-auto my-10 md:my-14"
    >
      <h3 className="text-2xl md:text-4xl text-center font-bold mb-3">
        See how ArtFusion can help
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <div className="text-center">
          <img className="w-40 mx-auto" src={buyHome} />
          <h3 className="text-2xl font-semibold mb-2">Buy a home</h3>
          <p className="w-[80%] mx-auto">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </p>
        </div>
        <div className="text-center">
          <img className="w-40 mx-auto" src={rentHome} />
          <h3 className="text-2xl font-semibold mb-2">Rent a home</h3>
          <p className="w-[80%] mx-auto">
            With 35+ filters and custom keyword search, Trulia can help you
            easily find a home or apartment for rent that you'll love.
          </p>
        </div>
        <div className="text-center">
          <img className="w-40 mx-auto" src={neighborhood} />
          <h3 className="text-2xl font-semibold mb-2">See neighborhoods</h3>
          <p className="w-[80%] mx-auto">
            With more neighborhood insights than any other real estate website,
            we've captured the color and diversity of communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
