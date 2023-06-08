import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const LINKS = [
	{
		title: "Product",
		items: ["Overview", "Features", "Solutions", "Tutorials"],
	},
	{
		title: "Company",
		items: ["About us", "Careers", "Press", "News"],
	},
	{
		title: "Resource",
		items: ["Blog", "Newsletter", "Events", "Help center"],
	},
];

const currentYear = new Date().getFullYear();

export default function Footer() {
	return (
		<footer className="relative py-8 w-full dark:bg-gray-800 dark:!text-gray-50">
			<div className="mx-auto w-full max-w-7xl px-8">
				<div className="grid grid-cols-1 justify-between items-center gap-4 md:grid-cols-2">
					<Typography variant="h2" className="mb-6">
						DevArt
					</Typography>
					<div className="grid grid-cols-3 justify-between gap-4">
						{LINKS.map(({ title, items }) => (
							<ul key={title}>
								<h5 className="mb-3 font-medium opacity-40">
									{title}
								</h5>
								{items.map((link) => (
									<li key={link}>
										<Link
											to="#"
											className="py-1.5 font-normal transition-colors hover:text-blue-gray-100">
											{link}
										</Link>
									</li>
								))}
							</ul>
						))}
					</div>
				</div>

				<div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-around">
					<h4 className="mb-4 text-center  md:mb-0">
						&copy; {currentYear}{" "}
						<Link
							className="text-blue-800 dark:text-blue-200"
							to="https://github.com/devMorshed">
							devMorshed
						</Link>
						. All Rights Reserved.
					</h4>
					<div className="flex gap-4 sm:justify-center  text-blue-gray-800 dark:text-blue-gray-200">
						<Link
							className="hover:text-blue-gray-900 hover:dark:text-blue-gray-50 transition-colors"
							to={"fblink"}>
							<BsFacebook size={25} />
						</Link>
						<Link
							className="hover:text-blue-gray-900 hover:dark:text-blue-gray-50 transition-colors"
							to={"git "}>
							<BsGithub size={25} />
						</Link>
						<Link
							className="hover:text-blue-gray-900 hover:dark:text-blue-gray-50 transition-colors"
							to={"linkediun "}>
							<BsLinkedin size={25} />
						</Link>
						<Link
							className="hover:text-blue-gray-900 hover:dark:text-blue-gray-50 transition-colors"
							to={"twittt "}>
							<BsTwitter size={25} />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
