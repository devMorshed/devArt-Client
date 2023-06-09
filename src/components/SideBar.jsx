import { Typography, List, ListItem } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export default function SideBar({ navItems }) {
	return (
		<div className="rounded-none overflow-hidden h-full  w-48 p-4 ">
			<div className="mb-2 p-4">
				<Typography variant="h5" color="blue-gray">
					Sidebar
				</Typography>
			</div>
			<List>
				{navItems?.map((nav) => (
					<NavLink to={`/dashboard/${nav.to}`} key={nav.to}>
						<ListItem>{nav.lable}</ListItem>
					</NavLink>
				))}
			</List>
		</div>
	);
}
