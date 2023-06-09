import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";
const useCart = () => {
	const { user, loading } = useAuth();

	const {
		refetch,
		data: cart = [],
		isLoading,
	} = useQuery({
		queryKey: ["carts", user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axios.get(`/cart?email=${user?.email}`);
			return res.data;
		},
	});

	return [cart, refetch, isLoading];
};
export default useCart;
