const SectionHead = ({ heading, subheading }) => {
	return (
		<div className="relative  dark:text-orange-300 text-center mx-auto h-36 flex flex-col justify-center items-center ">
			<p className="absolute pointer-events-none opacity-30 font-black uppercase tracking-widest top-0 bottom-0 -z-10 dark:z-0  left-1/2 -translate-x-1/2 text-5xl sm:text-6xl md:text-7xl text-gray-300 dark:text-gray-700 ">
				{heading}
			</p>
			<div className="z-10 space-y-2">
				<p className="text-3xl uppercase">{heading}</p>
				<p className="">{subheading}</p>
			</div>
		</div>
	);
};

export default SectionHead;
