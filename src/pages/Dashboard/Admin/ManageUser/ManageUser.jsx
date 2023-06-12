import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Card } from "@material-tailwind/react";
import SectionHead from "../../../../components/Shared/SectionHead";
import SmallBTN from "../../../../components/Shared/SmallBTN";
import Swal from "sweetalert2";
import Loader from "../../../../components/Shared/Loader";

const MangeUser = () => {
	const [axiosSecure] = useAxiosSecure();

	const tHeads = [
		{
			id: 1,
			lable: "Name",
		},
		{
			id: 2,
			lable: "Email",
		},
		{
			id: 3,
			lable: "Role",
		},
		{
			id: 4,
			lable: "Action",
		},
	];

	const { data, isLoading, refetch } = useQuery(["users"], async () => {
		const res = await axiosSecure.get("/users");
		return res.data;
	});

	const makeAdmin = (id) => {
		Swal.fire({
			title: "Are you sure?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Make Admin",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.put(`/makeadmin/${id}`).then((data) => {
					console.log(data.data);
					if (data.data.modifiedCount === 1) {
						refetch();
						Swal.fire(
							"Role Changed!",
							"Added as Admin.",
							"success"
						);
					}
				});
			}
		});
	};

	const makeInstructor = (id) => {
		Swal.fire({
			title: "Are you sure?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Make Instructor",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.put(`/makeinstructor/${id}`).then((data) => {
					console.log(data.data);
					if (data.data.modifiedCount === 1) {
						refetch();
						Swal.fire(
							"Role Changed!",
							"Added as Instructor.",
							"success"
						);
					}
				});
			}
		});
	};

	console.log(data);
	console.log(isLoading);

	return (
		<section className="px-4">
			<div className="pt-10">
				<SectionHead heading={"All User"} />
			</div>
			{isLoading ? (
				<Loader />
			) : (
				<Card className="p-4 overflow-auto dark:bg-gray-700 dark:text-gray-50 max-w-3xl mx-auto my-10">
					<table className="w-full my-4 overflow-auto ">
						<thead>
							<tr className="bg-gray-500 text-gray-50">
								{tHeads.map(({ id, lable }) => (
									<th key={id}>{lable}</th>
								))}
							</tr>
						</thead>
						<tbody className="">
							{data?.map(({ _id, role, email, name }) => (
								<tr
									className="text-center bg-gray-100 text-gray-800 even:bg-orange-100 dark:even:bg-orange-200"
									key={_id}>
									<td className="text-start p-4">{name}</td>
									<td>{email}</td>
									<td>{role}</td>
									<td className="py-1">
										{role === "student" && (
											<div className="space-x-2">
												<SmallBTN
													onClick={() =>
														makeAdmin(_id)
													}
													text={"admin"}
												/>

												<SmallBTN
													onClick={() =>
														makeInstructor(_id)
													}
													text={"instructor"}
												/>
											</div>
										)}
										{role === "instructor" && (
											<div>
												<SmallBTN
													onClick={() =>
														makeAdmin(_id)
													}
													text={"admin"}
												/>
											</div>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</Card>
			)}
		</section>
	);
};

export default MangeUser;
