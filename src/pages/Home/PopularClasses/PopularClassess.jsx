import { useQuery } from "@tanstack/react-query";
import SectionHead from "../../../components/Shared/SectionHead";
import ClassCard from "../../Classes/ClassCard";
import axios from "axios";

const PopularClassess = () => {
	const { data } = useQuery(["popularClass"], async () => {
		const res = await axios.get("/popularclasses");
		return res.data;
	});

	return (
		<section className="my-10 dark:bg-gray-800 dark:text-gray-50 ">
			<SectionHead
				heading={"Popular Classes"}
				subheading={"Choose form our trending classes"}
			/>

			<div className="my-10 grid px-6 md:grid-cols-2 xl:grid-cols-3 gap-10 ">
				{data?.map((course) => (
					<ClassCard key={course._id} data={course} />
				))}
			</div>
		</section>
	);
};

export default PopularClassess;
