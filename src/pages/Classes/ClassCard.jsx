import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
	IconButton,
} from "@material-tailwind/react";
import {
	StarIcon,
	HeartIcon,
	CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ClassCard({ data }) {
	// const isInstructor = true;
	const isInstructor = false;
	// const isAdmin = true;
	const isAdmin = false;
	// const user = false;
	const navigate = useNavigate();

	const { user } = useAuth();
	const { image, name, ratings, instructor, price, seats, total_seats } =
		data;

	const selectClass = () => {
		if (user) {
			const selectedClass = {
				image,
				name,
				price: parseFloat(price),
				email: user.email,
				addedtime: new Date().getTime(),
				status: "seleccted",
			};

			axios.post(`/cart/${user.email}`, selectedClass).then((res) => {
				console.log(res.data);
				if (res.data.acknowledged) {
					Swal.fire({
						position: "center",
						icon: "success",
						title: `${name} added to cart`,
						showConfirmButton: false,
						timer: 1200,
					});
				}
			});
		} else {
			Swal.fire({
				title: "You Have To Log In First",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Go to log in?",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/login");
				}
			});
		}
	};

	return (
		<Card
			className={`w-full max-w-[26rem] shadow-lg ${
				seats <= 0 && "bg-red-200"
			}`}>
			<CardHeader floated={false} color="blue-gray">
				<img className="h-60 w-full" src={image} alt={name} />
				{/* <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " /> */}
			</CardHeader>
			<CardBody>
				<div className="mb-3 flex gap-3 items-center justify-between">
					<Typography
						variant="h5"
						color="blue-gray"
						className="font-medium">
						{name}
					</Typography>

					<Typography
						color="blue-gray"
						className="flex items-center gap-1.5 font-normal">
						<StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
						{ratings}
					</Typography>
					<IconButton
						size="sm"
						color="red"
						variant="text"
						className="rounded-full">
						<HeartIcon className="h-6 w-6" />
					</IconButton>
				</div>
				<Typography
					variant="h6"
					color="blue-gray"
					className="font-medium my-2 tracking-wider">
					{instructor}
				</Typography>
				<Typography color="gray">
					Enter a freshly updated and thoughtfully furnished peaceful
					home surrounded by ancient trees, stone walls, and open
					meadows.
				</Typography>
				<div className="flex justify-between mt-4">
					<Typography>
						{seats}
						<span className="text-xs"> seats available</span>
					</Typography>
					<Typography
						color="blue-gray"
						className="flex items-center gap-1.5 font-normal">
						<CurrencyDollarIcon className="-mt-0.5 h-8 w-8 text-green-700" />
						{price}
						<span className="text-xs"> only.</span>
					</Typography>
				</div>
			</CardBody>
			<CardFooter className="pt-2">
				<Button
					onClick={selectClass}
					disabled={isAdmin || isInstructor}
					size="lg"
					fullWidth={true}>
					Select
				</Button>

				{/* {seats <= 0 || isAdmin || isInstructor ? (
					<Button disabled size="lg" fullWidth={true}>
						Select
					</Button>
				) : (
					<Button onClick={selectClass} size="lg" fullWidth={true}>
						Select
					</Button>
				)} */}
			</CardFooter>
		</Card>
	);
}
