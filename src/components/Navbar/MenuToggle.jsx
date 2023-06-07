import { Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import MenuItems from "./MenuItems";

const MenuToggle = () => {
	return (
		<Menu>
			<MenuHandler>
				<img
					className="rounded-full bg-black w-12 h-12"
					src="#"
					alt=""
				/>
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
