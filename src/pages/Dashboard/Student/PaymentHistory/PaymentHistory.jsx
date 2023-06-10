import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { Card } from "@material-tailwind/react";
import SectionHead from "../../../../components/Shared/SectionHead";

const PaymentHistory = () => {
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
			lable: "Date",
		},
	];

	const { data, isLoading } = useQuery(["paymenthistory"], async () => {
		const res = await axiosSecure.get(
			`/paymenthistory?email=${user?.email}`
		);
		return res.data;
	});

	console.log(data);
	console.log(isLoading);

	if (isLoading) {
		return "loading";
	}
	if (data) {
		return (
			<section className="px-4">
				<div className="pt-10">
					<SectionHead heading={"payment history"} />
				</div>
				<Card className="p-4 dark:bg-gray-700 dark:text-gray-50 max-w-3xl mx-auto my-10">
					<table className="w-full my-4 overflow-y-auto ">
						<thead>
							<tr className="bg-gray-500 text-gray-50">
								{tHeads.map(({ id, lable }) => (
									<th key={id}>{lable}</th>
								))}
							</tr>
						</thead>
						<tbody className="">
							{data?.map(({ _id, paymentDate, price, name }) => (
								<tr
									className="text-center bg-gray-100 text-gray-800 even:bg-orange-100 dark:even:bg-orange-200"
									key={_id}>
									<td className="text-start p-4">{name}</td>
									<td>${price}</td>
									<td>
										{new Date(paymentDate).toLocaleString()}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</Card>
			</section>
		);
	}
};

export default PaymentHistory;
