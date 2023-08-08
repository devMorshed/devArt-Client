import Banner from "./Banner/Banner";
import GetKnow from "./GetKnow/GetKnow";
import Partners from "./Partners/Partners";
import PopularClassess from "./PopularClasses/PopularClassess";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Statistics from "./Statistics/Statistics";
import TopCategories from "./TopCategories/TopCategories";

const Home = () => {
  return (
    <div>
      <Banner />
      <GetKnow />
      <TopCategories />
      <PopularClassess />
      <PopularInstructors />
      {/* <Statistics /> */}
      <Partners />
    </div>
  );
};

export default Home;
