import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const Dashboard = () => {
	let navItems = [];

	const isStudent = true;

	if (isStudent) {
		navItems = [
			{
				to: "/",
				lable: "Profile",
			},
			{
				to: "selected",
				lable: "Selected Class",
			},

			{
				to: "enrolled",
				lable: "Enrolled Class",
			},
			{
				to: "payment-history",
				lable: "Payment History",
			},
		];
	}

	console.log(navItems);

	return (
		<div className="flex relative min-h-[calc(100vh-64px-410px)] md:min-h-[calc(100vh-64px-302px)] bg-gray-100">
			<div className="absolute top-1/2 left-0 bg-transparent">
				<SideBar navItems={navItems} />
			</div>
			<div className="pl-48 w-full dark:text-gray-50 dark:bg-gray-800">
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
