import Banner from "./Banner/Banner";
import PopularClassess from "./PopularClasses/PopularClassess";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Statistics from "./Statistics/Statistics";
import Testimonilas from "./Testimonilas/Testimonilas";

const Home = () => {
	return (
		<div>
			<Banner />
			<PopularClassess />
			<PopularInstructors />
			<Testimonilas />
			<Statistics />
		</div>
	);
};

export default Home;
