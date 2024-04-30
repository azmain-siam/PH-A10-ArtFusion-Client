import { Link } from "react-router-dom";

const ArtAndCraft = ({ categories }) => {
  return (
    <div
      data-aos="fade-up"
      className="my-5 max-w-7xl w-[95%] md:w-[93%] mx-auto mt-10 md:mt-20"
    >
      <div className="text-center mb-10 md:mb-14">
        <h3 className="text-2xl md:text-4xl font-bold mb-3">Art and Crafts</h3>
        <div className="w-40 md:w-48 h-[3px] bg-[#E56997] mx-auto mb-5"></div>
        <p className="text-[#585858] text-sm md:text-base w-[90%] md:w-[600px] lg:w-[800px] mx-auto">
          Discover a diverse collection of landscapes, portraits, watercolors,
          and sketches, each piece crafted with passion and precision. Find the
          perfect artwork to elevate your space and inspire your imagination.
        </p>
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-3 gap-5 content-center">
        {categories.map((category) => (
          <Link key={category.name} to={`/categories/${category.name}`}>
            <div
              className={`w-full bg-no-repeat hover:scale-105 duration-500 cursor-pointer h-64 flex items-center bg-center bg-cover justify-center overflow-hidden rounded-xl bg- relative`}
              style={{
                backgroundImage: `url(${category.image})`,
              }}
            >
              <div className="bg-black w-full h-full absolute opacity-40"></div>
              <h3 className="text-center z-10 capitalize text-white font-bold text-xl md:text-2xl lg:text-3xl">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArtAndCraft;
