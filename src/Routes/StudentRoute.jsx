import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";

const StudentRoute = ({ children }) => {
	const [userRole, userRoleLoading] = useRole();

	if (userRoleLoading) {
		return "student loading here huh";
	}

	if (userRole === "student") {
		return children;
	} else {
		return <Navigate to={"/login"}></Navigate>;
	}
};

export default StudentRoute;
