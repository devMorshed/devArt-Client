import { Typography, List, ListItem } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export default function SideBar({ navItems }) {
	return (
		<div className="fixed top-16 rounded-none overflow-hidden h-fit w-48">
			<div className="mb-2 p-4">Dashboard</div>
			<div className="flex flex-col">
				{navItems?.map((nav) => (
					<NavLink
						className={"px-8 py-2 rounded hover:bg-gray-200"}
						to={`/dashboard/${nav.to}`}
						key={nav.to}>
						{nav.lable}
					</NavLink>
				))}
			</div>
		</div>
	);
}
