import { motion } from "framer-motion";
import CountUp from "react-countup";
import SectionHead from "../../../components/Shared/SectionHead";
import { Card } from "@material-tailwind/react";
import { Reorder } from "framer-motion";
import { useState } from "react";

const Statistics = () => {
	const [statistics, setStatistics] = useState([
		{ id: "class", label: "Class", count: 100 },
		{ id: "student", label: "Student", count: 500 },
		{ id: "instructor", label: "Instructor", count: 10 },
	]);

	const handleReorder = (newOrder) => {
		const newStatistics = newOrder.map((index) => statistics[index]);
		setStatistics(newStatistics);
	};

	return (
		<section className="p-4">
			<SectionHead
				heading={"Our Statistics"}
				subheading={"Choose from our Favorite Instructors"}
			/>
			<Card className="flex max-w-4xl rounded-md mx-auto mt-10 justify-center items-center dark:bg-gray-500">
				<Reorder.Group
					axis="x"
					values={statistics.map((statistic, index) => index)}
					onReorder={handleReorder}
					className="grid grid-cols-3 gap-4 p-4">
					{statistics.map((statistic, index) => (
						<Reorder.Item key={statistic.id} value={index}>
							<div
								className={`p-4 md:w-56 text-center border rounded shadow-md ${
									index === 0
										? "bg-blue-300"
										: index === 1
										? "bg-green-300"
										: "bg-yellow-300"
								}`}>
								<h2 className="text-lg font-bold mb-2">
									{statistic.label}
								</h2>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1 }}>
									<CountUp
										end={statistic.count}
										duration={2}
									/>
								</motion.div>
							</div>
						</Reorder.Item>
					))}
				</Reorder.Group>
			</Card>
		</section>
	);
};

export default Statistics;
