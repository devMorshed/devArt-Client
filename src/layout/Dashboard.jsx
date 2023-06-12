import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import useRole from "../hooks/useRole";

const Dashboard = () => {
	const studentNav = [
		{
			id: 1,
			to: "",
			lable: "Profile",
		},
		{
			id: 2,
			to: "selected",
			lable: "Selected",
		},
		{
			id: 3,
			to: "enrolled",
			lable: "Enrolled",
		},
		{
			id: 4,
			to: "payment-history",
			lable: "Payment History",
		},
	];

	const instructorNav = [
		{
			id: 1,
			to: "/",
			lable: "Profile",
		},
		{
			id: 2,
			to: "addclass",
			lable: "Add Class",
		},
		{
			id: 3,
			to: "myclasses",
			lable: "My Classes",
		},
	];

	const adminNav = [
		{
			id: 1,
			to: "/",
			lable: "Profile",
		},
		{
			id: 2,
			to: "manageuser",
			lable: "Manage",
		},
	];

	const [userRole, userRoleLoading] = useRole();

	console.log(userRole);

	if (userRoleLoading) {
		return <>Loading</>;
	} else {
		return (
			<div className="flex relative min-h-[calc(100vh-64px-410px)] md:min-h-[calc(100vh-64px-302px)] bg-gray-100">
				<div className="absolute top-1/2 left-0 bg-transparent">
					{userRole === "student" && (
						<SideBar navItems={studentNav} />
					)}
					{userRole === "instructor" && (
						<SideBar navItems={instructorNav} />
					)}
					{userRole === "admin" && <SideBar navItems={adminNav} />}
				</div>
				<div className="pl-48 w-full dark:text-gray-50 dark:bg-gray-800">
					<Outlet />
				</div>
			</div>
		);
	}
};

export default Dashboard;
