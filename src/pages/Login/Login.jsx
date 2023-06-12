import { useForm } from "react-hook-form";
import { Input, Typography } from "@material-tailwind/react";
import login from "../../assets/login.svg";
import BTN from "../../components/Shared/BTN";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { FaPlaneDeparture } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import axios from "axios";
const Login = () => {
	const { setLoading, signIn, signInWithGoogle, loading } = useAuth();
	const [showPass, setShowPass] = useState(false);
	const [error, setError] = useState("");
	const location = useLocation();
	const navigate = useNavigate();

	const destination = location.state?.from?.pathname || "/";

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = ({ mail, password }) => {
		signIn(mail, password)
			.then((data) => {
				axios
					.post("/jwt", {
						name: data?.user.displayName,
						email: data?.user.email,
					})
					.then((data) => {
						localStorage.setItem("access_token", data.data);
					});
				toast.success("Sign In Successfull");
				navigate(destination);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	};

	const handleGoogle = () => {
		setLoading(false);
		signInWithGoogle()
			.then((data) => {
				console.log(data.user);
				axios
					.post("/jwt", {
						name: data?.user.displayName,
						email: data?.user.email,
					})
					.then((data) => {
						localStorage.setItem("access_token", data.data);
					});
				toast.success("Sign In Successfull");
				navigate(destination);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	};

	return (
		<div className=" h-[calc(100vh-64px-410px)] md:min-h-[calc(100vh-64px-302px)] flex justify-center  p-10 py-20 dark:bg-gray-300">
			<div className="flex lg:gap-20 items-center justify-around ">
				<div className="hidden lg:block">
					<img src={login} alt="" />
				</div>

				<div>
					<h4 className="text-4xl tracking-tighter font-bold ">
						Log In
					</h4>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
						<div className="mb-4 flex flex-col gap-6">
							<div>
								<Input
									defaultValue={"test@test.com"}
									{...register("mail", {
										required: "Email Address is required",
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: "Invalid email address",
										},
									})}
									size="lg"
									label="Email"
									aria-invalid={
										errors.mail ? "true" : "false"
									}
								/>
								{errors.mail && (
									<p className="text-red-700" role="alert">
										{errors.mail.message}
									</p>
								)}
							</div>

							<div className="relative">
								<Input
									defaultValue={"Testtest#"}
									{...register("password", {
										required: "Password is required",
										minLength: {
											value: 6,
											message:
												"Password must be at least 6 characters long",
										},
									})}
									type={showPass ? "text" : "password"}
									size="lg"
									label="Password"
									aria-invalid={
										errors.password ? "true" : "false"
									}
								/>
								{errors.password && (
									<p className="text-red-700" role="alert">
										{errors.password.message}
									</p>
								)}

                <button
                  type="button"
									onClick={() => {
										setShowPass(!showPass);
									}}
									className="absolute top-1/2 -translate-y-1/2 right-5">
									{!showPass ? (
										<RiEyeCloseLine size={20} />
									) : (
										<RiEyeLine size={20} />
									)}
								</button>
							</div>
						</div>
						{error && (
							<div className="text-center text-red-500 font-bold">
								{error}
							</div>
						)}

						<div className="text-center">
							<BTN cclass={"w-32"} type="submit">
								{loading ? (
									<div className="flex animate-bounce justify-center">
										<FaPlaneDeparture size={24} />
									</div>
								) : (
									"Log In"
								)}
							</BTN>
						</div>
					</form>
					<div className="flex my-4">
						<div
							onClick={handleGoogle}
							className="flex justify-center items-center  mx-auto gap-2 border  p-2 border-gray-300 border-rounded cursor-pointer">
							<FcGoogle size={32} />
							<p>Continue with Google</p>
						</div>
					</div>
					<Typography
						color="gray"
						className="mt-4 text-center font-normal">
						Already have an account?{" "}
						<Link
							to="/signup"
							className="font-medium text-blue-500 transition-colors hover:text-blue-700">
							Sign Up
						</Link>
					</Typography>
				</div>
			</div>
		</div>
	);
};

export default Login;
