import { Helmet } from "react-helmet";
import Banner from "../Components/Banner";
import Feature from "../Components/Feature";
import Crafts from "../Components/Crafts";
const Home = () => {

  return (
    <div>
      <Helmet>
        <title>Home | ArtFusion</title>
      </Helmet>
      <Banner />
      <Crafts />
      <Feature />
    </div>
  );
};

export default Home;
