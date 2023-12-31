import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import SectionHead from "../../components/Shared/SectionHead";
import InstructorCard from "./InstructorCard";
import Loader from "../../components/Shared/Loader";

const Instructors = () => {
	const { data, isLoading } = useQuery(["Instructors"], async () => {
		const res = await axios.get("/instructors");
		return res.data;
	});

	return (
		<section className="my-10 dark:bg-gray-800 dark:text-gray-50">
			<SectionHead
				heading={" Instructors"}
				subheading={"Choose form our Favorite Instructors"}
			/>
			{isLoading ? (
				<Loader />
			) : (
				<div className="my-10 grid px-6 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-center items-center">
					{data?.map((instructor) => (
						<InstructorCard
							key={instructor._id}
							data={instructor}
						/>
					))}
				</div>
			)}
		</section>
	);
};

export default Instructors;
