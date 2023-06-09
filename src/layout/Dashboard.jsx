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
				to: "payment",
				lable: "Payment",
			},
			{
				to: "enrolled",
				lable: "Enrolled Class",
			},
		];
	}

  

	console.log(navItems);

	return (
		<div className="flex">
			<SideBar navItems={navItems} />
			<Outlet />
		</div>
	);
};

export default Dashboard;
