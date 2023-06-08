import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import SectionHead from "../../components/Shared/SectionHead";
import ClassCard from "./ClassCard";

const Instructors = () => {
	const { data } = useQuery(["Classes"], async () => {
		const res = await axios.get("/classes");
		return res.data;
	});

	return (
		<section className="my-10 dark:bg-gray-800 dark:text-gray-50">
			<SectionHead
				heading={" Classes"}
				subheading={"Choose form our Favorite Instructors"}
			/>
			<div className="my-10 grid px-6 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-center items-center">
				{data?.map((instructor) => (
					<ClassCard key={instructor.id} data={instructor} />
				))}
			</div>
		</section>
	);
};

export default Instructors;
