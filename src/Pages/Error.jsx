import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center h-screen font-montserrat">
      <Helmet>
        <title>404 Error</title>
      </Helmet>
      <div className="text-center">
        <h1 className="text-7xl md:text-[150px] font-extrabold">Oops!</h1>
        <h3 className="text-lg md:text-2xl font-semibold uppercase my-4 ">
          404 - Page not found
        </h3>
        <p className="w-[80%] text-xs md:text-base font-medium mb-4 mx-auto">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link to={"/"}>
          <button className="bg-[#E56997] shadow shadow-slate-500 text-sm hover:scale-105 duration-200 uppercase font-semibold px-5 py-2 rounded-full text-white">
            Go to homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
