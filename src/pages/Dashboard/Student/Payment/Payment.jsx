import { useLocation } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import BTN from "../../../../components/Shared/BTN";
import { Elements } from "@stripe/react-stripe-js";
import ChecoutForm from "./ChecoutForm";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
	const location = useLocation();
	const {name, image, price, _id:classID} = location.state;

  const stripePromise = loadStripe(import.meta.env.VITE_PK);
  
	return (
		<div className="w-full p-6 flex items-center flex-col my-10 md:flex-row gap-10">
			<div className="md:w-1/2">
				<h5 className="text-xl w-2/3 text-center mb-4 mx-auto">
					{name}
				</h5>
				<img src={image} alt="" />
			</div>
			<div className="payment_details w-full md:w-1/2 ">
				{/* <h4 className="text-xl my-4">Payment Details</h4>
				<div className="flex flex-col gap-3">
					<Input label="Card Number" />
					<Input label="Cardholder Name" />
					<div className="flex flex-col lg:flex-row gap-2">
						<Input type="date" label="Expired at" />

						<Input type="number" label="CVV" />
					</div>
					<BTN>{`Pay $${data?.price}`}</BTN>
				</div> */}
				<Elements stripe={stripePromise}>
					<ChecoutForm classID={classID} price={price}></ChecoutForm>
				</Elements>
			</div>
		</div>
	);
};

export default Payment;
