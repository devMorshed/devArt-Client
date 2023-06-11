import { useForm } from "react-hook-form";
import SectionHead from "../../../../components/Shared/SectionHead";
import { Card, Input } from "@material-tailwind/react";

import BTN from "../../../../components/Shared/BTN";
import useAuth from "../../../../hooks/useAuth";
const Addclass = () => {
	const { user } = useAuth();
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	const onSubmit = (values) => {
		console.log(values);
		values.status = "pending";
		values.enrolled_student = 0;
		
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
								{...register("classname", { required: true })}
								className="dark:text-white"
								label="Class Name"
							/>
							{errors.classname && (
								<span>Class Name is required</span>
							)}
						</div>

						<div>
							<Input
								{...register("imageURL", { required: true })}
								className="dark:text-white"
								label="Class Image url"
							/>
							{errors.imageURL && (
								<span>Image url is required</span>
							)}
						</div>
					</div>

					<div className="flex flex-col md:flex-row gap-4">
						<div>
							{" "}
							<Input
								className="dark:text-white"
								label="Instructor Name"
								readOnly
								defaultValue={user?.displayName}
							/>
						</div>

						<div>
							<Input
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
					<div className="flex justify-center">
						<BTN type="submit">Add Class</BTN>
					</div>
				</form>
			</Card>
		</section>
	);
};

export default Addclass;
