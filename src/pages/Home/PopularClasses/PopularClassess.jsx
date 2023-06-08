import SectionHead from "../../../components/Shared/SectionHead";
import ClassCard from "../../Classes/ClassCard";

const data = [
	{
		image: "https://i.ibb.co/dPTz7cL/totoro.jpg",
		name: "Introduction to Watercolor Painting",
		instructor: "Jane Smith",
		seats: 15,
		total_seats: 20,
		price: 49.99,
		ratings: 4.5,
		enrolled_students: 120,
		button: "Select",
	},
	{
		image: "https://i.ibb.co/6RrktdP/wood-sculptor.jpg",
		name: "Wood Sculpture Workshop",
		instructor: "John Johnson",
		seats: 10,
		total_seats: 15,
		price: 79.99,
		ratings: 4.2,
		enrolled_students: 90,
		button: "Select",
	},
	{
		image: "https://i.ibb.co/TkTWYWr/caligraphy.jpg",
		name: "Introduction to Calligraphy",
		instructor: "Emily Davis",
		seats: 20,
		total_seats: 25,
		price: 29.99,
		ratings: 4.8,
		enrolled_students: 150,
		button: "Select",
	},
	// {
	// 	image: "course4.jpg",
	// 	name: "Basic Knitting Techniques",
	// 	instructor: "Michael Thompson",
	// 	seats: 12,
	// 	total_seats: 15,
	// 	price: 39.99,
	// 	ratings: 4.6,
	// 	enrolled_students: 100,
	// 	button: "Select",
	// },
	// {
	// 	image: "course5.jpg",
	// 	name: "Jewelry Making for Beginners",
	// 	instructor: "Sarah Wilson",
	// 	seats: 8,
	// 	total_seats: 10,
	// 	price: 59.99,
	// 	ratings: 4.3,
	// 	enrolled_students: 75,
	// 	button: "Select",
	// },
	{
		image: "https://i.ibb.co/P9z3Z8K/oil.jpg",
		name: "Oil Painting Masterclass",
		instructor: "David Anderson",
		seats: 10,
		total_seats: 15,
		price: 89.99,
		ratings: 4.9,
		enrolled_students: 180,
		button: "Select",
	},
	{
		image: "https://i.ibb.co/BNG51rR/origami.jpg",
		name: "Introduction to Origami",
		instructor: "Amy Roberts",
		seats: 15,
		total_seats: 20,
		price: 34.99,
		ratings: 4.4,
		enrolled_students: 110,
		button: "Select",
	},
	// {
	// 	image: "course8.jpg",
	// 	name: "Creative Embroidery Workshop",
	// 	instructor: "Laura Adams",
	// 	seats: 12,
	// 	total_seats: 15,
	// 	price: 44.99,
	// 	ratings: 4.7,
	// 	enrolled_students: 130,
	// 	button: "Select",
	// },
	{
		image: "https://i.ibb.co/89J9pWQ/ceramic.jpg",
		name: "Ceramic Painting Techniques",
		instructor: "Mark Turner",
		seats: 0,
		total_seats: 12,
		price: 49.99,
		ratings: 4.2,
		enrolled_students: 80,
		button: "Select",
	},
	// {
	// 	image: "course10.jpg",
	// 	name: "Mixed Media Art Exploration",
	// 	instructor: "Jessica Parker",
	// 	seats: 15,
	// 	total_seats: 20,
	// 	price: 59.99,
	// 	ratings: 4.6,
	// 	enrolled_students: 150,
	// 	button: "Select",
	// },
];

const PopularClassess = () => {
	return (
		<section className="my-10 dark:bg-gray-800 dark:text-gray-50 ">
			<SectionHead
				heading={"Popular Classes"}
				subheading={"Choose form our trending classes"}
			/>

			<div className="my-10 grid px-6 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-center items-center">
				{data?.map((course) => (
					<ClassCard key={course.name} data={course} />
				))}
			</div>
		</section>
	);
};

export default PopularClassess;
