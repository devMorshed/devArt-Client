import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import BTN from "../../../../components/Shared/BTN";
import { Card } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ price, classID, cartID }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [cardError, setCardError] = useState();
	const [axiosSecure] = useAxiosSecure();
	const [clientSecret, setClientSecret] = useState();
	const [processing, setProcessing] = useState(false);
	const [transactionId, setTransactionId] = useState("");
	const navigate = useNavigate();
	const { user } = useAuth();

	useEffect(() => {
		if (price > 0) {
			axiosSecure
				.post("/create-payment-intent", { price })
				.then((res) => {
					console.log(res.data.clientSecret);
					setClientSecret(res.data.clientSecret);
				});
		}
	}, [price, axiosSecure]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);

		if (card == null) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		if (error) {
			setCardError(error.message);
		} else {
			console.log("[PaymentMethod]", paymentMethod);
		}

		setProcessing(true);

		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						email: user?.email || "unknown",
						name: user?.displayName || "anonymous",
					},
				},
			});

		if (confirmError) {
			console.log(confirmError);
		}

		console.log("payment intent", paymentIntent);

		setProcessing(false);

		if (paymentIntent.status === "succeeded") {
			setTransactionId(paymentIntent.id);
			const payment = {
				email: user?.email,
				transactionId: paymentIntent.id,
				price,
				cartID,
				classID,
				paymentDate: new Date(),
			};
			axiosSecure.post("/payments", payment).then((res) => {
				console.log(res.data);
				if (res.data.insertResult.insertedId) {
					Swal.fire({
						position: "center",
						icon: "success",
						title: "Paymnent Successfull",
						showConfirmButton: false,
						timer: 1200,
					});
					navigate("/dashboard/enrolled");
				}
			});
		}
	};

	return (
		<Card className="p-10">
			<form onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: "16px",
								color: "#424770",
								"::placeholder": {
									color: "#aab7c4",
								},
							},
							invalid: {
								color: "#9e2146",
							},
						},
					}}
				/>
				{cardError && (
					<p className="text-center my-4 text-orange-900">
						{cardError}
					</p>
				)}

				<BTN
					cclass={"my-6 block mx-auto"}
					type="submit"
					disabled={!stripe || !clientSecret || processing}>
					Pay ${price}
				</BTN>
			</form>
		</Card>
	);
};

export default CheckoutForm;
