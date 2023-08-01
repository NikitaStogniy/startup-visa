"use client";

import { useState } from "react";
import Button from "./Button";
import Popup from "./Popup";

interface MenuProps {
	popupControl: () => void;
}

const Menu: React.FC<MenuProps> = ({ popupControl }) => {
	const links = [
		{ text: "Главная", link: "#" },
		{ text: "Услуги", link: "#services" },
		{ text: "О ВНЖ", link: "#about" },
		{ text: "Алгоритм", link: "#algorithm" },
		{ text: "Партнеры", link: "#partners" },
		{ text: "FAQ", link: "#faq" },
	];
	const [open, setOpen] = useState(false);
	const handleOpenMenu = () => {
		setOpen(!open);
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
							onClick={() => handleOpenMenu()}
							type={"text"}
							label={""}
						/>
					</div>
					<div className="hidden lg:block">
						<Button
							onClick={popupControl}
							type={"outline"}
							label={"Узнать больше"}
						/>
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
