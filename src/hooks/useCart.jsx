import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useCart = () => {
	const { user, loading } = useAuth();
	const [axiosSecure] = useAxiosSecure();
	const {
		data: cart = [],
		refetch,
		isLoading,
	} = useQuery({
		queryKey: ["cart", user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure(`/cart?email=${user?.email}`);
			return res.data;
		},
	});

	return [cart, refetch, isLoading];
};
export default useCart;
