import useCart from "../../../../hooks/useCart";
import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";

import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link, NavLink } from "react-router-dom";
import BTN from "../../../../components/Shared/BTN";
import SectionHead from "../../../../components/Shared/SectionHead";

const SelectedClass = () => {
	const [cart, refetch, isLoading] = useCart();
	const [axiosSecure] = useAxiosSecure();

	console.log(cart);

	const TABLE_HEAD = ["Name", "Added", "Price", "", ""];

	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.delete(`/cart/${id}`).then((data) => {
					console.log(data.data);
					refetch();
					if (data.data.deletedCount === 1) {
						Swal.fire(
							"Deleted!",
							"Your file has been deleted.",
							"success"
						);
					}
				});
			}
		});
	};

	// todo need proper loader

	if (isLoading) {
		return <div>Loading</div>;
	}

	if (cart.length <= 0) {
		return <div>gob</div>;
	} else {
		return (
			<section className="px-4">
				<div className="pt-10">
					<SectionHead heading={"Selected Class"} />
				</div>
				<Card className="overflow-auto max-w-3xl mx-auto my-10 dark:bg-gray-700">
					<table className="w-full my-10 min-w-max table-auto text-left">
						<thead>
							<tr>
								{TABLE_HEAD.map((head, index) => (
									<th
										key={index}
										className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
										<Typography
											variant="small"
											color="blue-gray"
											className="font-normal leading-none opacity-70">
											{head}
										</Typography>
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{cart?.map(
								({
									_id,
									name,
									price,
									addedtime,
									image,
									classID,
								}) => (
									<tr
										key={_id}
										className="even:bg-blue-gray-50/50 dark:bg-orange-50">
										<td className="p-4 ">
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal">
												{name}
											</Typography>
										</td>
										<td className="p-4">
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal">
												{new Date(
													addedtime
												).toLocaleString()}
											</Typography>
										</td>
										<td className="p-4">
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal">
												${price}
											</Typography>
										</td>
										<td className="p-4">
											<button
												onClick={() => {
													handleDelete(_id);
												}}>
												<AiFillDelete
													size={25}
													color="red"
												/>
											</button>
										</td>
										<td className="p-4">
											<Link
												state={{
													name,
													price,
													image,
													_id,
													classID,
												}}
												to={`/dashboard/payment/${_id}`}>
												<BTN>Pay</BTN>
											</Link>
										</td>
									</tr>
								)
							)}
						</tbody>
					</table>
				</Card>
			</section>
		);
	}
};

export default SelectedClass;
