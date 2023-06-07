import { NavLink } from "react-router-dom";

const MenuItems = () => {

	const navItems = [
		{
			id: 1,
			to: "/",
			lable: "Home",
		},
		{
			id: 2,
			to: "/classes",
			lable: "Classes",
		},
		{
			id: 3,
			to: "/instructors",
			lable: "Instructors",
		},
	];

	return (
		<div className="flex md:flex-row flex-col gap-2">
			{navItems?.map((navItem) => (
				<NavLink key={navItem.id} to={navItem.to}>
					{navItem.lable}
				</NavLink>
			))}
		</div>
	);
};

export default MenuItems;
