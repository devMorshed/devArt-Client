import { Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import MenuItems from "./MenuItems";
import useAuth from "../../hooks/useAuth";
import { ImSpinner3 } from "react-icons/im";

const MenuToggle = () => {
	const { user, loading } = useAuth();
	console.log(loading);
	return (
		<Menu>
			<MenuHandler>
				{loading ? (
					<div className="w-12 h-12 rounded-full">
						<ImSpinner3 />
					</div>
				) : (
					<img
						className="rounded-full  w-12 h-12"
						src={user.photoURL}
						alt=""
					/>
				)}
			</MenuHandler>
			<MenuList className=" space-y-2 md:hidden border-none">
				<NavLink className={"border-none"} to={"/dashboard"}>
					Dashboard
				</NavLink>
				<MenuItems />
			</MenuList>
		</Menu>
	);
};

export default MenuToggle;
