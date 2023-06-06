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
			className={`relative min-h-screen max-w-7xl mx-auto  ${
				darken && "dark"
        }`}>
      
			<NavBar />
			<Outlet />
			<Footer />

			{/* Dark Moded Toggler */}
			<div className="absolute bottom-10 right-10 rounded-full border p-4 bg-gray-800 dark:bg-gray-200">
				<label htmlFor="darkenTheme">
					<input
						type="checkbox"
						id="darkenTheme"
						hidden
						size={20}
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
	);
};

export default MainLayout;
