import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
	const admin = true;
	if (admin) {
		return children;
	} else {
		return <Navigate to={"/login"}></Navigate>;
	}
};

export default AdminRoute;
