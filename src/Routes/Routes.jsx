import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../layout/Dashboard";
import SelectedClass from "../pages/Dashboard/Student/SelectedClass/SelectedClass";
import EnrolledCLass from "../pages/Dashboard/Student/EnrolledCLass/EnrolledCLass";
import Payment from "../pages/Dashboard/Student/Payment/Payment";
import InstructorRoute from "./InstructorRoute";
import Myclass from "../pages/Dashboard/Instructor/Myclass/Myclass";
import Addclass from "../pages/Dashboard/Instructor/Addclass/Addclass";
import AdminRoute from "./AdminRoute";
import ManageClass from "../pages/Dashboard/Admin/MangeClass/ManageClass";
import ManageUser from "../pages/Dashboard/Admin/ManageUser/ManageUser";
import Profile from "../pages/Dashboard/Profile";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory/PaymentHistory";
import StudentRoute from "./StudentRoute";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signup",
				element: <Signup />,
			},
			{
				path: "/instructors",
				element: <Instructors />,
			},
			{
				path: "/classes",
				element: <Classes />,
			},
			{
				path: "/dashboard",
				element: (
					<PrivateRoutes>
						<Dashboard />
					</PrivateRoutes>
				),
				children: [
					{
						path: "/dashboard",
						element: <Profile />,
					},
					{
						path: "payment/:id",
						element: (
							<StudentRoute>
								<Payment />
							</StudentRoute>
						),
					},
					{
						path: "payment-history",
						element: (
							<StudentRoute>
								<PaymentHistory />
							</StudentRoute>
						),
					},
					{
						path: "selected",
						element: (
							<StudentRoute>
								<SelectedClass />
							</StudentRoute>
						),
					},
					{
						path: "enrolled",
						element: (
							<StudentRoute>
								<EnrolledCLass />
							</StudentRoute>
						),
					},
					{
						path: "addclass",
						element: (
							<InstructorRoute>
								<Addclass />
							</InstructorRoute>
						),
					},
					{
						path: "myclasses",
						element: (
							<InstructorRoute>
								<Myclass />
							</InstructorRoute>
						),
					},
					{
						path: "manageclass",
						element: (
							<AdminRoute>
								<ManageClass />
							</AdminRoute>
						),
					},
					{
						path: "manageuser",
						element: (
							<AdminRoute>
								<ManageUser />
							</AdminRoute>
						),
					},
				],
			},
		],
	},
]);
