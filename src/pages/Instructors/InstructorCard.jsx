import { Typography } from "@material-tailwind/react";
import BTN from "../../components/Shared/BTN";
import {
	StarIcon,
} from "@heroicons/react/24/solid";
const InstructorCard = ({ data }) => {
	const { image, name, email, ratings } = data;
	return (
		<figure className="relative w-96 h-96">
			<img className="h-full object-cover w-full rounded-md" src={image} alt={name} />

			<div className="absolute top-2 right-5">
				<Typography
					color="blue-gray"
					className="flex items-center gap-1.5 bg-orange-50 rounded px-2">
					<StarIcon className="-mt-0.5 h-5 w-5 text-yellow-900" />
					{ratings}
				</Typography>
			</div>

			<figcaption className="absolute bottom-8 left-2/4 flex items-center  w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
				<div>
					<Typography variant="h5" color="blue-gray">
						{name}
					</Typography>
					<Typography color="gray" className="mt-2 font-normal">
						{email}
					</Typography>
				</div>
				<div>
					<BTN>See Class</BTN>
				</div>
			</figcaption>
		</figure>
	);
};

export default InstructorCard;
