import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import SectionHead from "../../../../components/Shared/SectionHead";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Typography,
} from "@material-tailwind/react";

const EnrolledCLass = () => {
	const [axiosSecure] = useAxiosSecure();
	const { user } = useAuth();

	const { data, isLoading } = useQuery(["enrolled"], async () => {
		const res = await axiosSecure.get(`/enrolled?email=${user?.email}`);
		return res.data;
	});

	console.log(data, isLoading);

	if (isLoading) {
		return <div>Loading</div>;
	}

	if (data) {
		return (
			<section className="py-10 w-full dark:bg-gray-800 dark:text-gray-50">
				<SectionHead
					heading={"Enrolled Classes"}
					subheading={"Start Your Journey"}
				/>
				<div className="my-10 grid px-6 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-center items-center">
					{data?.map(({ _id, image, name }) => (
						<Card
							className="dark:bg-gray-600 dark:text-gray-50"
							key={_id}>
							<CardHeader floated={false} color="blue-gray">
								<img
									className="h-60 w-full"
									src={image}
									alt={name}
								/>
								<div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
							</CardHeader>
							<CardBody>
								<div className="mb-3 flex gap-3 items-center justify-between">
									<Typography
										variant="h5"
										className="font-medium">
										{name}
									</Typography>
								</div>
								<Typography>
									Enter a freshly updated and thoughtfully
									furnished peaceful home surrounded by
									ancient trees, stone walls, and open
									meadows.
								</Typography>
							</CardBody>
							<CardFooter className="pt-2">
								<Button size="lg" fullWidth={true}>
									View Class
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
					))}
				</div>
			</section>
		);
	}
};

export default EnrolledCLass;
