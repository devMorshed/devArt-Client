import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useRole = () => {
	const token = localStorage.getItem("access_token");
	const { user, loading } = useAuth();
	const [axiosSecure] = useAxiosSecure();
  // invested 12 hours!!! 
  // just for realizing set token as query key!!! 

	const {
		data: userRole = null,
		isLoading: userRoleLoading,
		refetch: userRoleRefetch,
	} = useQuery({
		queryKey: ["userRole", user?.email, token],
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure.get(`userrole/${user?.email}`);
			return res.data.role;
		},
	});

	return [userRole, userRoleLoading, userRoleRefetch];
};

export default useRole;
