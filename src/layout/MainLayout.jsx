import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div>
			nav
			<Outlet />
			footer
		</div>
	);
};

export default MainLayout;
