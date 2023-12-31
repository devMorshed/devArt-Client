import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";

const InstructorRoute = ({ children }) => {
	const [userRole, userRoleLoading] = useRole();

	if (userRoleLoading) {
		return "instructor Loader here huh";
	}

	if (userRole === "instructor") {
		return children;
	} else {
		return <Navigate to={"/login"}></Navigate>;
	}
};

export default InstructorRoute;
