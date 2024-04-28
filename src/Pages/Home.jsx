import { Helmet } from "react-helmet";
import Banner from "../Components/Banner";
import Estates from "../Components/Estates";
import { useLoaderData } from "react-router-dom";
import Feature from "../Components/Feature";
const Home = () => {
  const estates = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Home | ArtFusion</title>
      </Helmet>
      <Banner />
      <Estates estates={estates} />
      <Feature />
    </div>
  );
};

export default Home;
