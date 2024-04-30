import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const item = useLoaderData();
  console.log(item);
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
  } = item;
  return (
    <div className="max-w-7xl w-[93%] md:w-[93%] mx-auto my-8 flex flex-col lg:flex-row gap-6 items-center">
      <Helmet>
        <title>Product Details | ArtFusion</title>
      </Helmet>
      <div className="w-full lg:w-[600px] h-[240px] md:h-[400px] lg:h-[550px] rounded-xl overflow-hidden cursor-pointer">
        <img
          className="object-cover w-full h-full hover:scale-105 duration-700"
          src="https://img.freepik.com/free-vector/hand-draw-mountain-landscape-scene-watercolor-background_1035-23805.jpg?w=740&t=st=1714403600~exp=1714404200~hmac=ea356fb117e31c8a7475f429348038a0fac670bbfd7446eceb1504a93012dee6"
        />
      </div>
      <div>
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:items-center">
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Countryside Fields Painting
            </h3>
            <p className="font-medium text-[#585858] md:text-lg">
              A pastoral painting of fields and farmlands, evoking a sense of
              peace.
            </p>
          </div>
        </div>
        <hr className="my-4 md:my-5" />
        <div className="flex flex-row-reverse items-center justify-between">
          <h3 className="text-2xl md:text-4xl font-bold">${price}.00</h3>
          <h4 className="text-lg md:text-xl font-semibold">Rating: 4.5</h4>
        </div>
        <hr className="my-4 md:my-5" />
        <div>
          {/* Details */}
          <div className="w-full border rounded-lg">
            <h3 className="bg-[#F5F6F7] px-5 py-3 text-lg font-semibold border-b">
              Other Informations:
            </h3>
            <div className="px-5 py-4 border-b">
              <h3 className="md:text-lg font-semibold">
                Customizable: {customization}
              </h3>
            </div>
            <div className="px-5 py-4 border-b">
              <h3 className="md:text-lg font-semibold">
                Proccessing Time: 3 days
              </h3>
            </div>
            <div className="px-5 py-4 border-b">
              <h3 className="md:text-lg font-semibold mb-2">
                Stock Status: Made to order
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
