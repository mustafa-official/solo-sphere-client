import { useLoaderData, useNavigation } from "react-router-dom";
import AllTab from "../../components/AllTab";
import Slider from "../../components/Slider";

const Home = () => {
  const jobs = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") return <p>Loading...</p>;

  return (
    <div>
      <Slider></Slider>
      <AllTab jobs={jobs}></AllTab>
    </div>
  );
};

export default Home;
