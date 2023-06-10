import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useStudent = () => {
	const { user, loading } = useAuth();
	const [axiosSecure] = useAxiosSecure();
	// use axios secure with react query
	const {
		data: isStudent,
		isLoading: isStudentLoading,
		refetch: studentRefeatch,
	} = useQuery({
    queryKey: ["isStudent"],
    
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure.get(`isstudent/${user?.email}`);
			return res.data.student;
		},
	});
	return [isStudent, isStudentLoading, studentRefeatch];
};
export default useStudent;
