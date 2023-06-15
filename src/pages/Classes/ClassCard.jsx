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
import useRole from "../../hooks/useRole";

export default function ClassCard({ data }) {
	const [userRole] = useRole();
	const navigate = useNavigate();

	const { user } = useAuth();
	const {
		_id,
		image,
		name,
		ratings,
		instructor,
		instructor_mail,
		price,
		available_seats,
		total_seats,
		details,
	} = data;

	console.log(data);

	const selectClass = () => {
		if (user) {
			const selectedClass = {
				classID: _id,
				image,
				name,
				price: parseFloat(price),
				user_email: user.email,
				instructor_mail,
				addedtime: new Date().getTime(),
				status: "selected",
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
			className={` dark:bg-gray-700 dark:text-gray-50 w-full max-w-[26rem] shadow-lg ${
				available_seats <= 0 && "bg-red-200"
			}`}>
			<CardHeader floated={false} color="blue-gray">
				<img className="h-60 w-full" src={image} alt={name} />
				{/* <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " /> */}
			</CardHeader>
			<CardBody>
				<div className="mb-3 flex gap-3 items-center justify-between">
					<Typography variant="h5" className="font-medium">
						{name}
					</Typography>

					<Typography className="flex items-center gap-1.5 font-normal">
						<StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
						{ratings}
					</Typography>
				</div>
				<Typography
					variant="h6"
					className="font-medium my-2 tracking-wider">
					{instructor}
				</Typography>
				<Typography>{details.slice(0,200)}</Typography>
			</CardBody>
			<CardFooter className="pt-2 mt-auto">
				<div className="flex justify-between my-4">
					<Typography>
						{available_seats}
						<span className="text-xs"> seats available</span>
					</Typography>
					<Typography className="flex items-center gap-1.5 font-normal">
						<CurrencyDollarIcon className="-mt-0.5 h-8 w-8 text-green-700" />
						{price}
						<span className="text-xs"> only.</span>
					</Typography>
				</div>
				<Button
					onClick={selectClass}
					disabled={
						userRole === "admin" ||
						userRole === "instructor" ||
						available_seats <= 0
					}
					size="lg"
					fullWidth={true}>
					Select
				</Button>
			</CardFooter>
		</Card>
	);
}
