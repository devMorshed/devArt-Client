import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import SectionHead from "../../../../components/Shared/SectionHead";
import ClassCard from "../../../Classes/ClassCard";

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
			<section className="py-10 dark:bg-gray-800 dark:text-gray-50">
				<SectionHead
					heading={"Enrolled Classes"}
					subheading={"Start Your Journey"}
				/>
				<div className="my-10 grid px-6 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-center items-center">
					{data?.map((item) => (
						<ClassCard key={item._id} data={item} />
					))}
				</div>
			</section>
		);
	}
};

export default EnrolledCLass;
