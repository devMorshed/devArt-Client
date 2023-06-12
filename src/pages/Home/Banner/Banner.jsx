import { Button, Carousel, Typography } from "@material-tailwind/react";

export default function Banner() {
	return (
		<Carousel
			autoplay={true}
			loop={true}
			autoplayDelay={3000}
			className=""
			navigation={({ setActiveIndex, activeIndex, length }) => (
				<div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
					{new Array(length).fill("").map((_, i) => (
						<span
							key={i}
							className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
								activeIndex === i
									? "bg-white w-8"
									: "bg-white/50 w-4"
							}`}
							onClick={() => setActiveIndex(i)}
						/>
					))}
				</div>
			)}>
			<div className=" relative h-96 md:h-[450px]  lg:h-[555px]">
				<img
					src="https://i.ibb.co/P9z3Z8K/oil.jpg"
					className="h-full w-full object-cover"
				/>
				<div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
					<div className="w-3/4 text-center md:w-2/4">
						<Typography
							variant="h1"
							color="white"
							className="mb-4 text-3xl md:text-4xl lg:text-5xl">
							The Beauty of Creativity
						</Typography>
						<Typography
							variant="lead"
							color="white"
							className="mb-12 opacity-80">
							Creativity allows us to view and solve problems more
							openly and with innovation. Creativity opens the
							mind. A society that has lost touch with its
							creative side is an imprisoned society
						</Typography>
						<div className="flex justify-center gap-2">
							<Button size="lg" color="white">
								Explore
							</Button>
							<Button size="lg" color="white" variant="text">
								Gallery
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className=" relative h-96 md:h-[450px] lg:h-[555px]">
				<img
					src="https://i.ibb.co/R7v7VkH/c.jpg"
					className="h-full w-full object-cover"
				/>
				<div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
					<div className="w-3/4 text-center md:w-2/4">
						<Typography
							variant="h1"
							color="white"
							className="mb-4 text-3xl md:text-4xl lg:text-5xl">
							The Beauty of Craft
						</Typography>
						<Typography
							variant="lead"
							color="white"
							className="mb-12 opacity-80">
							Stimulate creativity and imagination: Children who
							frequently make crafts, work with all their
							ingenuity to create unique and original figures,
						</Typography>
						<div className="flex justify-center gap-2">
							<Button size="lg" color="white">
								Explore
							</Button>
							<Button size="lg" color="white" variant="text">
								Gallery
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className=" relative h-96 md:h-[450px] lg:h-[555px]">
				<img
					src="https://i.ibb.co/RQhc9gK/sc.webp"
					className="h-full w-full object-cover"
				/>
				<div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
					<div className="w-3/4 text-center md:w-2/4">
						<Typography
							variant="h1"
							color="white"
							className="mb-4 text-3xl md:text-4xl lg:text-5xl">
							The Beauty of Art
						</Typography>
						<Typography
							variant="lead"
							color="white"
							className="mb-12 opacity-80">
							Art can communicate information, shape our everyday
							lives, make a social statement and be enjoyed for
							aesthetic beauty
						</Typography>
						<div className="flex justify-center gap-2">
							<Button size="lg" color="white">
								Explore
							</Button>
							<Button size="lg" color="white" variant="text">
								Gallery
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Carousel>
	);
}
