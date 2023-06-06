import { Navigate } from "react-router-dom";

const InstructorRoute = ({ children }) => {


	const instructor = true;
	if (instructor) {
		return children;
	} else {
		return <Navigate to={'/login'}></Navigate>
	}
};

export default InstructorRoute;
