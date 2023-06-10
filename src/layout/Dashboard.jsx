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
		];
	}

	console.log(navItems);

	return (
		<div className="flex min-h-[calc(100vh-64px-410px)] md:min-h-[calc(100vh-64px-302px)] bg-gray-100">
			<SideBar navItems={navItems} />
			<Outlet />
		</div>
	);
};

export default Dashboard;
