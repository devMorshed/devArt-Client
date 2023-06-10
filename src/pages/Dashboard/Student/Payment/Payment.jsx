import { useLocation } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import BTN from "../../../../components/Shared/BTN";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
	const location = useLocation();
	const { name, image, price, _id: cartID, classID } = location.state;

	const stripePromise = loadStripe(import.meta.env.VITE_PK);

	// console.log('cart', cartID, classID);
	return (
		<div className="w-full p-6  my-10">
			<div className="flex items-center my-4 justify-between">
				<div className="text-center space-y-1 mx-auto">
					<p>Complete the Payment</p>
					<p>to</p>
					<p>Confirm the Enrollment</p>
					<h5 className="py-4 text-xl text-center mb-4 mx-auto">
						{name}
					</h5>
				</div>
				<img className="w-1/2 rounded-md" src={image} alt="" />
			</div>
			<div className=" ">
				<Elements stripe={stripePromise}>
					<CheckoutForm
						name={name}
						cartID={cartID}
						classID={classID}
						price={price}></CheckoutForm>
				</Elements>
			</div>
		</div>
	);
};

export default Payment;
