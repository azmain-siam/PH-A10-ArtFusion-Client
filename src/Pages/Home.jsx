import { Helmet } from "react-helmet";
import Banner from "../Components/Banner";
import Feature from "../Components/Feature";
import Crafts from "../Components/Crafts";
import ArtAndCraft from "../Components/ArtAndCraft";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | ArtFusion</title>
      </Helmet>
      <Banner />
      <Crafts />
      <ArtAndCraft />
      <Feature />
    </div>
  );
};

export default Home;
