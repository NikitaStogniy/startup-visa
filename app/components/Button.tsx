"use client";

import { ReactComponentElement } from "react";
import { HambergerMenu, LampCharge, Notepad2, StatusUp } from "iconsax-react";

interface ButtonProps {
	type: "fill" | "outline" | "text" | "tab";
	link?: string | null;
	label: string;
	icon?: "idea" | "createForMe" | "business" | "menu" | null;
	color?: "white" | "blue";
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
	type,
	label,
	icon,
	color,
	link,
	onClick,
}) => {
	let classVar =
		"w-fit px-[28px] py-[12px] rounded-xl font-medium ease-in-out duration-300 flex flex-row gap-[8px] flex-row whitespace-nowrap flex-nowrap";
	if (type == "fill" && color != "white") {
		classVar +=
			"shadow-2xl shadow-violet-500/10 bg-violet-500 text-white hover:bg-violet-600  hover:shadow-violet-500/90";
	} else if (type == "fill" && color == "white") {
		classVar +=
			"shadow-2xl shadow-white/30 bg-white text-gray-800 hover:shadow-white/90 ";
	} else if (type == "tab") {
		classVar +=
			"shadow-2xl  shadow-blue-500/50 bg-violet-500 text-white hover:bg-violet-600 hover:shadow-violet-500/90";
	} else if (type == "outline") {
		classVar += "border border-gray-300 text-gray-600 hover:border-gray-500";
	} else if (type == "text") {
		classVar +=
			"text-violet-500 hover:bg-violet-600/10 hover:shadow-violet-500/10";
	}
	let iconSVG = <LampCharge size={24} color="#7F56D9" />;
	if (icon == "createForMe") {
		iconSVG = <Notepad2 size={24} color="#7F56D9" />;
	} else if (icon == "business") {
		iconSVG = <StatusUp size={24} color="#7F56D9" />;
	} else if (icon == "menu") {
		iconSVG = <HambergerMenu size={24} color="#7F56D9" />;
	}
	if (link) {
		return (
			<a href={link} className={classVar}>
				{icon && iconSVG}
				{label}
			</a>
		);
	}
	return (
		<button onClick={onClick} className={classVar}>
			{icon && iconSVG}
			{label}
		</button>
	);
};
export default Button;
