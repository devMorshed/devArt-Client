import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {

	return (
		<div className="flex justify-center flex-col md:flex-row h-screen items-center gap-10 p-20 bg-orange-100">
			<div className="">
				<img
					className="rounded-xl"
					src="https://i.ibb.co/9Tdc7tG/err.png"
					alt=""
				/>
			</div>
			<div className="">
				<h4 className="text-4xl font-mono text-center max-w-md">
					Opps! <br /> the page you're seeking is not available right
					now.
				</h4>

				<Link to={"/"}>
					<button className=" btn bg-rose-300 px-4 py-2 block mx-auto my-8 rounded-md btn-outline hover:btn-warning  text-black border-gray-900 ">
						Back To Home
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
