/* eslint-disable react/no-unescaped-entities */
import buyHome from "../assets/BuyAHome.svg";
import rentHome from "../assets/RentAHome.svg";
import neighborhood from "../assets/Neighborhoods.svg";

const Feature = () => {
  return (
    <div
      data-aos="fade-up"
      className="max-w-7xl w-[93%] md:w-[93%] mx-auto mt-20"
    >
      <h3 className="text-2xl md:text-4xl text-center font-bold mb-3">
        See how ArtFusion can help
      </h3>
      <div className="w-52 md:w-96 h-[3px] bg-[#E56997] mx-auto mb-5"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <div className="text-center">
          <img className="w-40 mx-auto" src={buyHome} />
          <h3 className="text-2xl font-semibold mb-2">
            Customized Art Creations
          </h3>
          <p className="w-[80%] mx-auto">
            Explore the process of personalizing art to match your unique vision
            and style. Learn how ArtFusion's talented artists can create custom
            pieces that reflect your individual taste and preferences.
          </p>
        </div>
        <div className="text-center">
          <img className="w-40 mx-auto" src={rentHome} />
          <h3 className="text-2xl font-semibold mb-2">
            Art Education and Inspiration
          </h3>
          <p className="w-[80%] mx-auto">
            Discover resources and tools that help you grow as an artist or art
            enthusiast. From tutorials and workshops to galleries and
            exhibitions, ArtFusion provides a wealth of opportunities to deepen
            your appreciation of art.
          </p>
        </div>
        <div className="text-center">
          <img className="w-40 mx-auto" src={neighborhood} />
          <h3 className="text-2xl font-semibold mb-2">
            Connecting with Artists
          </h3>
          <p className="w-[80%] mx-auto">
            Learn how ArtFusion connects you with skilled artists who can bring
            your ideas to life. Engage with creators, discuss projects, and
            collaborate to produce art that resonates with you on a personal
            level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
