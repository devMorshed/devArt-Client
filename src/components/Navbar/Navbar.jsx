import { Link, NavLink } from "react-router-dom";
import BTN from "../Shared/BTN";
import MenuItems from "./MenuItems";
import MenuToggle from "./MenuToggle";
import useAuth from "../../hooks/useAuth";
import { ImSpinner3 } from "react-icons/im";
import du from "../../assets/dd.gif";
const Navbar = () => {
	// ##TODO Have to make logo
	// ##TODO Have to active style nav items

	const { user, loading } = useAuth();

	return (
		<nav className="flex z-50 sticky top-0 bg-orange-50  justify-between items-center py-2 shadow-md px-4">
			{/* Logo part  */}
			<div>
				<Link className="flex items-center" to={"/"}>
					<img className="w-12 rounded-full" src={du} alt="" />
					<p className="text-2xl font-bold tracking-tighter">evArt</p>
				</Link>
			</div>

			{/* main menu  */}
			<div className="hidden md:block ">
				<MenuItems />
			</div>

			{/* dashboad and profile picture conditional  */}
			<div className="flex justify-end gap-4">
				{loading ? (
					<div className="   md:flex items-center gap-4">
						<div className="w-20 h-12 hidden md:block animate-ping bg-blue-gray-50"></div>
						<div className=" h-12 w-12 flex justify-center items-center">
							<ImSpinner3 size={20} />
						</div>
					</div>
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
