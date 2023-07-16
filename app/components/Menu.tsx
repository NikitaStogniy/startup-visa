"use client";

import { useState } from "react";
import Button from "./Button";

const Menu = () => {
	const links = [
		{ text: "Главная", link: "#" },
		{ text: "Услуги", link: "#" },
		{ text: "О ВНЖ", link: "#" },
		{ text: "Алгоритм", link: "#" },
		{ text: "Партнеры", link: "#" },
		{ text: "FAQ", link: "#" },
	];
	const [open, setOpen] = useState(Boolean);
	const handleOpen = () => {
		console.log("open");
		if (!open) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	};
	return (
		<div className="fixed flex-col z-50 w-full md:w3/4 backdrop-blur-sm">
			<div className={open ? "bg-white" : "bg-white/70"}>
				<div className=" py-8 flex flex-row justify-between w-full align-center items-center px-4">
					<div className="text-3xl font-bold">
						<span className="text-violet-600">Startup</span> Visa
					</div>
					<ul className="hidden lg:flex flex flex-row gap-8 xl:gap-16">
						{links.map((link, index) => (
							<li key={index}>
								<a
									className="text-gray-400 ease-in-out duration-300 hover:text-gray-600"
									href={link.link}
								>
									{link.text}
								</a>
							</li>
						))}
					</ul>

					<div className="z-100 block lg:hidden">
						<Button
							icon={"menu"}
							onClick={() => handleOpen()}
							type={"text"}
							label={""}
						/>
					</div>
					<div className="hidden lg:block">
						<Button type={"outline"} label={"Узнать больше"} />
					</div>
				</div>
				{open && (
					<div className="block lg:hidden bg-white h-fit rounded-xl w-full">
						<ul className="flex flex-col items-center gap-2  py-4">
							{links.map((link) => (
								<li key={link.text}>
									<a
										className="text-gray-400 ease-in-out duration-300 hover:text-gray-600"
										href={link.link}
									>
										{link.text}
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};
export default Menu;
