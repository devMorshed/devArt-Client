import Banner from "./Banner/Banner";
import GetKnow from "./GetKnow/GetKnow";
import PopularClassess from "./PopularClasses/PopularClassess";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Statistics from "./Statistics/Statistics";

const Home = () => {
  return (
    <div>
      <Banner />
      <GetKnow />
      <PopularClassess />
      <PopularInstructors />
      <Statistics />
    </div>
  );
};

export default Home;
