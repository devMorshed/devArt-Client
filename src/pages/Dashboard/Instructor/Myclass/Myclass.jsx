import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { Card } from "@material-tailwind/react";
import SectionHead from "../../../../components/Shared/SectionHead";
import { Link } from "react-router-dom";
import BTN from "../../../../components/Shared/BTN";
import Loader from "../../../../components/Shared/Loader";

const MyClass = () => {
	const [axiosSecure] = useAxiosSecure();
	const { user } = useAuth();

	const tHeads = [
		{
			id: 1,
			lable: "Name",
		},
		{
			id: 2,
			lable: "Price",
		},
		{
			id: 3,
			lable: "Enrolled",
		},
		{
			id: 4,
			lable: "Status",
		},
		{
			id: 5,
			lable: "Feedback",
		},
		{
			id: 6,
			lable: "Action",
		},
	];

	const { data, isLoading } = useQuery(["myclass"], async () => {
		const res = await axiosSecure.get(`/myclass/${user?.email}`);
		return res.data;
	});

	console.log(data);
	console.log(isLoading);

	return (
		<section className="px-4">
			<div className="pt-10">
				<SectionHead heading={"My Class"} />
			</div>
			{isLoading ? (
				<Loader />
			) : data?.length > 0 ? (
				<Card className="p-4 ove dark:bg-gray-700 dark:text-gray-50 max-w-3xl mx-auto my-10">
					<table className="w-full my-4 overflow-y-auto ">
						<thead>
							<tr className="bg-gray-500 text-gray-50">
								{tHeads.map(({ id, lable }) => (
									<th key={id}>{lable}</th>
								))}
							</tr>
						</thead>
						<tbody className="">
							{data?.map(
								({
									_id,
									enrolled_studentss,
									feedback,
									status,
									price,
									name,
								}) => (
									<tr
										className="text-center bg-gray-100 text-gray-800 even:bg-orange-100 dark:even:bg-orange-200"
										key={_id}>
										<td className="text-start p-4">
											{name}
										</td>
										<td>${price}</td>
										<td>{enrolled_studentss}</td>
										<td>{status}</td>
										<td>
											{status === "denied"
												? feedback
												: ""}
										</td>
										<td>
											<BTN>Update</BTN>
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

export default MyClass;
