import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import axios from "axios";

const useRole = () => {
	const { user, loading } = useAuth();
	const [axiosSecure] = useAxiosSecure();

	// Provide an initial value for userRole
	const {
		data: userRole = null,
		isLoading: userRoleLoading,
		refetch: userRoleRefetch,
	} = useQuery({
		queryKey: ["userRole"],
		enabled: !loading,
		queryFn: async () => {
			const res = await axios.get(`userrole/${user?.email}`);
			return res.data.role;
		},
	});

	return [userRole, userRoleLoading, userRoleRefetch];
};

export default useRole;
