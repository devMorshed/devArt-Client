import SectionHead from "../../../components/Shared/SectionHead";
import InstructorCard from "../../Instructors/InstructorCard";

const PopularInstructors = () => {
	const data = [
		{
			id: 1,
			name: "Morshed",
			email: "demo@com",
			image: "https://i.ibb.co/MR8VCTz/chef2.jpg",
			ratings: 4.5,
		},
		{
			id: 2,
			name: "Morshed",
			email: "demo@com",
			image: "https://i.ibb.co/MR8VCTz/chef2.jpg",
			ratings: 4.5,
		},
		{
			id: 3,
			name: "Morshed",
			email: "demo@com",
			image: "https://i.ibb.co/MR8VCTz/chef2.jpg",
			ratings: 4.5,
		},
		{
			id: 4,
			name: "Morshed",
			email: "demo@com",
			image: "https://i.ibb.co/MR8VCTz/chef2.jpg",
			ratings: 4.5,
		},
		{
			id: 5,
			name: "Morshed",
			email: "demo@com",
			image: "https://i.ibb.co/MR8VCTz/chef2.jpg",
			ratings: 4.5,
		},
		{
			id: 6,
			name: "Morshed",
			email: "demo@com",
			image: "https://i.ibb.co/MR8VCTz/chef2.jpg",
			ratings: 4.5,
		},
	];
	return (
		<section className="my-10 dark:bg-gray-800 dark:text-gray-50">
			<SectionHead
				heading={"Popular Instructors"}
				subheading={"Choose form our Favorite Instructors"}
			/>
			<div className="my-10 grid px-6 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-center items-center">
				{data?.map((instructor) => (
					<InstructorCard key={instructor.id} data={instructor} />
				))}
			</div>
		</section>
	);
};

export default PopularInstructors;
