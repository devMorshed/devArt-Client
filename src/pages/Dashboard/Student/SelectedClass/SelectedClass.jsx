import useCart from "../../../../hooks/useCart";
import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";

import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const SelectedClass = () => {
	const [cart, refetch, isLoading] = useCart();

	const TABLE_HEAD = ["Name", "Added", "Price", "", ""];

	console.log(cart);

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
				axios.delete(`/cart/${id}`).then((data) => {
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
			<div className="overflow-scroll my-10 mx-6 h-full w-full">
				<table className="w-full min-w-max table-auto text-left">
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
						{cart.map(({ _id, name, price, addedtime }, index) => (
							<tr key={_id} className="even:bg-blue-gray-50/50">
								<td className="p-4">
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
										{new Date(addedtime).toLocaleString()}
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
										<AiFillDelete size={25} color="red" />
									</button>
								</td>
								<td className="p-4">
									<Typography
										as="a"
										href="#"
										variant="small"
										color="blue"
										className="font-medium">
										Pay
									</Typography>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
};

export default SelectedClass;
