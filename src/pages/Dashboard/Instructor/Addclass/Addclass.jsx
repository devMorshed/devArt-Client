import { useForm } from "react-hook-form";
import SectionHead from "../../../../components/Shared/SectionHead";
import { Card, Input, Textarea } from "@material-tailwind/react";

import BTN from "../../../../components/Shared/BTN";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import axios from "axios";
const Addclass = () => {
	const { user } = useAuth();
	const [axiosSecure] = useAxiosSecure();
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	const onSubmit = async (values) => {
		console.log(values);
		values.status = "pending";
		values.available_seats = parseFloat(values.available_seats);
		values.price = parseFloat(values.price);
		values.feedback = "";
		values.enrolled_studentss = 0;
		await axiosSecure
			.post(`/classes/${user?.email}`, values)
			.then((res) => console.log(res));
	};
	return (
		<section className="p-4 mt-10">
			<SectionHead heading={"Add Class"} />
			<Card className="dark:bg-gray-700 dark:text-gray-50 max-w-2xl mx-auto">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="mx-auto flex flex-col  gap-4 p-6">
					<div className="flex dark:placeholder:text-white flex-col md:flex-row gap-4">
						<div>
							<Input
								{...register("name", { required: true })}
								className="dark:text-white"
								label="Class Name"
							/>
							{errors.name && <span>Class Name is required</span>}
						</div>

						<div>
							<Input
								{...register("image", { required: true })}
								className="dark:text-white"
								label="Class Image url"
							/>
							{errors.image && <span>Image url is required</span>}
						</div>
					</div>

					<div className="flex flex-col md:flex-row gap-4">
						<div>
							<Input
								{...register("instructor", { required: true })}
								className="dark:text-white"
								label="Instructor Name"
								readOnly
								defaultValue={user?.displayName}
							/>
						</div>

						<div>
							<Input
								{...register("instructor_mail", {
									required: true,
								})}
								className="dark:text-white"
								label="Instructor Email"
								defaultValue={user?.email}
								readOnly
							/>
						</div>
					</div>
					<div className="flex flex-col md:flex-row gap-4">
						<div>
							<Input
								{...register("available_seats", {
									required: true,
								})}
								className="dark:text-white"
								type="number"
								label="Available Seats"
							/>
							{errors.available_seats && (
								<span>Available Seats number is required</span>
							)}
						</div>

						<div>
							<Input
								{...register("price", { required: true })}
								className="dark:text-white"
								type="number"
								label="$ Price "
							/>
							{errors.price && <span>Price is required</span>}
						</div>
					</div>
					<Textarea
						{...register("details", { required: true })}
						label="Details"
						rows={1}
					/>
					<div className="flex justify-center">
						<BTN type="submit">Add Class</BTN>
					</div>
				</form>
			</Card>
		</section>
	);
};

export default Addclass;
