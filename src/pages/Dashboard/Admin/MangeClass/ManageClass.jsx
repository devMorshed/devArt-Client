import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Avatar, Card } from "@material-tailwind/react";
import SectionHead from "../../../../components/Shared/SectionHead";
import { Link } from "react-router-dom";
import BTN from "../../../../components/Shared/BTN";
import SmallBTN from "../../../../components/Shared/SmallBTN";
import Swal from "sweetalert2";

const ManageClass = () => {
	const [axiosSecure] = useAxiosSecure();

	const tHeads = [
		{
			id: 1,
			lable: "Image",
		},
		{
			id: 2,
			lable: "Name",
		},
		{
			id: 3,
			lable: "Instructor Name",
		},
		{
			id: 4,
			lable: "Instructor Mail",
		},
		{
			id: 5,
			lable: "Available Seats",
		},
		{
			id: 6,
			lable: "Price",
		},
		{
			id: 7,
			lable: "Status",
		},

		{
			id: 8,
			lable: "Action",
		},
	];

	const { data, isLoading, refetch } = useQuery(["Classes"], async () => {
		const res = await axiosSecure.get("/allclass");
		return res.data;
	});

	console.log(data);
	console.log(isLoading);

	const approveClass = (id) => {
		Swal.fire({
			title: "Are you sure?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Approve",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.put(`/approveclass/${id}`).then((data) => {
					console.log(data.data);
					if (data.data.modifiedCount === 1) {
						refetch();
						Swal.fire("Class Approved!", "success");
					}
				});
			}
		});
	};

	const denyClass = (id) => {
		Swal.fire({
			title: "Are you sure?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Deny",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.put(`/denyclass/${id}`).then((data) => {
					console.log(data.data);
					if (data.data.modifiedCount === 1) {
						refetch();
						Swal.fire("Class Denied!", "success");
					}
				});
			}
		});
	};

	return (
		<section className="px-4">
			<div className="pt-10">
				<SectionHead heading={"Manage Class"} />
			</div>
			{isLoading ? (
				"loaduing"
			) : data?.length > 0 ? (
				<Card className="p-4 dark:bg-gray-700 dark:text-gray-50 mx-auto my-10">
					<table className="w-full my-4 overflow-y-auto ">
						<thead>
							<tr className="bg-gray-500 text-gray-50">
								{tHeads.map(({ id, lable }) => (
									<th key={id}>{lable}</th>
								))}
							</tr>
						</thead>
						<tbody className="-tracking-[0.02rem]">
							{data?.map(
								({
									_id,
									image,
									name,
									instructor,
									instructor_mail,
									available_seats,
									price,
									status,
								}) => (
									<tr
										className="text-center bg-gray-100 text-gray-800 even:bg-orange-100 dark:even:bg-orange-200"
										key={_id}>
										<td className="text-start p-4">
											<Avatar
												variant="circular"
												alt="Class Image"
												src={image}
											/>
										</td>
										<td className="text-start p-4">
											{name}
										</td>
										<td className="text-start p-4">
											{instructor}
										</td>
										<td className="text-start p-4">
											{instructor_mail}
										</td>
										<td>{available_seats}</td>
										<td>${price}</td>
										<td>{status}</td>
										<td className="space-x-1">
											<SmallBTN
												disabled={
													status === "approved" ||
													status === "denied"
												}
												onClick={() =>
													approveClass(_id)
												}
												text={"Approve"}
											/>

											<SmallBTN
												disabled={
													status === "approved" ||
													status === "denied"
												}
												onClick={() => denyClass(_id)}
												text={"Deny"}
											/>
											<SmallBTN text={"Feedback"} />
										</td>
									</tr>
								)
							)}
						</tbody>
					</table>
				</Card>
			) : (
				<div className="flex flex-col items-center mx-auto w-full   justify-center my-10 text-2xl">
					<p>no data found</p>
					<Link to={"/dashboard/addclass"}>
						<BTN>Add Class</BTN>
					</Link>
				</div>
			)}
		</section>
	);
};

export default ManageClass;
