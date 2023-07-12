"use client";

import Button from "../../Button";
import Idea from "../../public/idea.svg";
import Accept from "../../public/CheckIcon.svg";
import InfoSectionFirst from "./InfoSectionFirst";
import { useState } from "react";
import InfoSectionThird from "./InfoSectionThird";
import InfoSectionSecond from "./InfoSectionSecond";
const InfoSection = () => {
	const [active, setActive] = useState<Number | null>(1);
	const handleClick = (text: Number) => {
		setActive(text);
	};

	const tabStyle = "absolute h-[48px] w-[168px] rounded-xl bg-violet-100 -z-10";

	return (
		<div className="flex flex-col gap-8 items-center mx-8 max-w-sm md:max-w-3xl">
			<div className="flex flex-row gap-[8px] bg-gray-100/40 p-[8px] rounded-xl overflow-auto max-w-sm md:max-w-2  xl   mx-10">
				<Button
					type={"text"}
					label={"Есть идея"}
					icon={"idea"}
					onClick={() => handleClick(1)}
				/>
				<Button
					type={"text"}
					label={"Есть бизнес"}
					icon={"business"}
					onClick={() => handleClick(2)}
				/>
				<Button
					type={"text"}
					label={"Сделайте мне!"}
					icon={"createForMe"}
					onClick={() => handleClick(3)}
				/>
			</div>
			<div className="md:px-16 md:py-8 w-fit bg-gray-100/60 rounded-xl flex flex-col">
				{active == 1 && <InfoSectionFirst />}
				{active == 2 && <InfoSectionSecond />}
				{active == 3 && <InfoSectionThird />}
			</div>
		</div>
	);
};

export default InfoSection;
