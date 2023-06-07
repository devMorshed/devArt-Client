import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { BsMoonStarsFill } from "react-icons/bs";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/Navbar";
const MainLayout = () => {
	const [darken, setDarken] = useState(false);

	const handleDarken = () => {
		setDarken(!darken);
	};

	return (
		<div
			className={`relative flex flex-col min-h-screen max-w-7xl mx-auto  ${
				darken && "dark"
			}`}>
			<NavBar />

			<div className="grow">
				<Outlet />
			</div>

			<Footer />

			{/* Dark Moded Toggler */}
			<div className="sticky bottom-0">
				<div className=" absolute bottom-10 right-10  w-fit p-4 rounded-full border  bg-gray-800 dark:bg-gray-200">
					<label htmlFor="darkenTheme">
						<input
							type="checkbox"
							id="darkenTheme"
							hidden
							checked={darken}
							onChange={handleDarken}
						/>
						{darken ? (
							<BsMoonStarsFill size={20} />
						) : (
							<FiSun size={20} color="white" />
						)}
					</label>
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
