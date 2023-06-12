import Banner from "./Banner/Banner";
import PopularClassess from "./PopularClasses/PopularClassess";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Statistics from "./Statistics/Statistics";

const Home = () => {
	return (
		<div>
			<Banner />
			<PopularClassess />
			<PopularInstructors />
			<Statistics />
		</div>
	);
};

export default Home;
