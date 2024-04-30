import { Helmet } from "react-helmet";
import Banner from "../Components/Banner";
import Feature from "../Components/Feature";
import Crafts from "../Components/Crafts";
import ArtAndCraft from "../Components/ArtAndCraft";
import { useLoaderData } from "react-router-dom";
import About from "../Components/About";
const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Home | ArtFusion</title>
      </Helmet>
      <Banner/>
      <Crafts />
      <ArtAndCraft categories={categories} />
      <Feature />
      <About />
    </div>
  );
};

export default Home;
