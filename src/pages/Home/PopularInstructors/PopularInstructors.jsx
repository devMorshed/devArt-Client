import { useQuery } from "@tanstack/react-query";
import SectionHead from "../../../components/Shared/SectionHead";
import InstructorCard from "../../Instructors/InstructorCard";
import axios from "axios";

const PopularInstructors = () => {

	const { data } = useQuery(["popularInstructors"], async () => {
		const res = await axios.get("/popularinstructors");
		return res.data;
  });
  
	return (
		<section className="my-10 dark:bg-gray-800 dark:text-gray-50">
			<SectionHead
				heading={"Popular Instructors"}
				subheading={"Choose form our Favorite Instructors"}
			/>
			<div className="my-10 grid px-6 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-center items-center">
				{data?.map((instructor) => (
					<InstructorCard key={instructor._id} data={instructor} />
				))}
			</div>
		</section>
	);
};

export default PopularInstructors;
