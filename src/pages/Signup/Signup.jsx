import { useForm } from "react-hook-form";
import { Input, Typography } from "@material-tailwind/react";
import login from "../../assets/signup.svg";
import BTN from "../../components/Shared/BTN";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { FaPlaneDeparture } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
const Signup = () => {
	const {
		setLoading,
		createUser,
		updateUserProfile,
		signInWithGoogle,
		loading,
	} = useAuth();
	const [showPass, setShowPass] = useState(false);
	const [showConfirmPass, setShowConfirmPass] = useState(false);
	const [error, setError] = useState("");
	const location = useLocation();
	const navigate = useNavigate();
	const destination = location.state?.from?.pathname || "/";
	const {
		register,
		formState: { errors },
		handleSubmit,
		watch,
	} = useForm();

	const password = watch("password", "");
	const validatePassword = (value) => {
		if (value.length < 6) {
			return "Password must be at least 6 characters long";
		}
		if (!/[A-Z]/.test(value)) {
			return "Password must contain at least one capital letter";
		}
		if (!/[^A-Za-z0-9]/.test(value)) {
			return "Password must contain at least one special character";
		}

		return true;
	};

	const onSubmit = ({ name, email, password, photo }) => {
		createUser(email, password)
			.then((data) => {
				console.log(data);
				updateUserProfile(name, photo)
					.then((data) => {
						console.log(data);
						toast.success("Signup Successfull");
						setLoading(false);
						navigate(destination);
					})
					.catch((err) => setError(err.message));
			})
			.catch((err) => setError(err.message));
	};

	const handleGoogle = () => {
		setLoading(false);
		signInWithGoogle()
			.then(() => {
				toast.success("Sign In Successfull");
				navigate(destination);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	};

	return (
		<div className="min-h-[calc(100vh-64px-410px)] md:min-h-[calc(100vh-64px-302px)] flex justify-center p-10  pt-20 dark:bg-gray-300">
			<div className="flex lg:gap-20 items-center justify-around ">
				<div className="hidden lg:block  ">
					<img src={login} alt="" />
				</div>

				<div>
					<h4 className="text-4xl tracking-tighter font-bold ">
						Sign Up
					</h4>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
						<div className="mb-4 flex flex-col gap-6">
							<div>
								<Input
									{...register("name", {
										required: "Name is required",
									})}
									size="lg"
									label="Name"
									aria-invalid={
										errors.name ? "true" : "false"
									}
								/>
								{errors.name && (
									<p className="text-red-700" role="alert">
										{errors.name.message}
									</p>
								)}
							</div>

							<div>
								<Input
									{...register("email", {
										required: "Email Address is required",
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: "Invalid email address",
										},
									})}
									size="lg"
									label="Email"
									aria-invalid={
										errors.email ? "true" : "false"
									}
								/>
								{errors.email && (
									<p className="text-red-700" role="alert">
										{errors.email.message}
									</p>
								)}
							</div>

							<div className="relative">
								<Input
									{...register("password", {
										required: "Password is required",
										validate: validatePassword,
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

							{/* confirm pass */}
							<div className="relative">
								<Input
									{...register("confirmpassword", {
										required:
											"Please confirm your password",
										validate: (value) =>
											value === password ||
											"Passwords do not match",
									})}
									type={showConfirmPass ? "text" : "password"}
									size="lg"
									label="Confirm Password"
									aria-invalid={
										errors.confirmpassword
											? "true"
											: "false"
									}
								/>
								{errors.confirmpassword && (
									<p className="text-red-700" role="alert">
										{errors.confirmpassword.message}
									</p>
								)}

								<button
									onClick={() => {
										setShowConfirmPass(!showConfirmPass);
									}}
									className="absolute top-1/2 -translate-y-1/2 right-5">
									{!showConfirmPass ? (
										<RiEyeCloseLine size={20} />
									) : (
										<RiEyeLine size={20} />
									)}
								</button>
							</div>

							{/* photo url    */}

							<div>
								<Input
									{...register("photo", {
										required: "Photo URL is required",
									})}
									size="lg"
									label="Photo Url"
									aria-invalid={
										errors.photo ? "true" : "false"
									}
								/>
								{errors.photo && (
									<p className="text-red-700" role="alert">
										{errors.photo.message}
									</p>
								)}
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
									"Sign Up"
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
							to="/login"
							className="font-medium text-blue-500 transition-colors hover:text-blue-700">
							Log In
						</Link>
					</Typography>
				</div>
			</div>
		</div>
	);
};

export default Signup;
