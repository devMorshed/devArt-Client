import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";

const AdminRoute = ({ children }) => {

  const [userRole, userRoleLoading] = useRole();


  if (userRoleLoading) {
    return "admin Loader here huh"
  }

	if (userRole === "admin") {
		return children;
	} else {
		return <Navigate to={"/login"}></Navigate>;
	}
};

export default AdminRoute;
