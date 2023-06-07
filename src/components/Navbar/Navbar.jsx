import { Link, NavLink } from "react-router-dom";
import BTN from "../Shared/BTN";
import MenuItems from "./MenuItems";
import MenuToggle from "./MenuToggle";

const Navbar = () => {
	// ##TODO Have to make logo
	// ##TODO Have to active style nav items

	const user = "user";
	// const user = false;
	const isLoading = false;
	// const isLoading = true;



	return (
		<nav className="flex sticky top-0 bg-orange-50  justify-between items-center py-2 shadow-md px-4">
			{/* Logo part  */}
			<div className="">
				<Link to={"/"}>
					<p className="text-2xl font-bold tracking-tighter">
						DevArt
					</p>
				</Link>
			</div>

			{/* main menu  */}
			<div className="hidden md:block ">
				<MenuItems />
			</div>

			{/* dashboad and profile picture conditional  */}
			<div className="flex justify-end gap-4">
				{isLoading ? (
					<div>Loading</div>
				) : user ? (
					<div className="flex items-center gap-4">
						<NavLink
							className={"hidden md:block"}
							to={"/dashboard"}>
							Dashboard
						</NavLink>
						<MenuToggle />
					</div>
				) : (
					<div>
						<Link to={"/login"}>
							<BTN>Log In</BTN>
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
