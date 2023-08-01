"use client";

import Button from "../../Button";
import Idea from "../../public/idea.svg";
import Accept from "../../public/CheckIcon.svg";
import InfoSectionFirst from "./InfoSectionFirst";
import { useState } from "react";
import InfoSectionThird from "./InfoSectionThird";
import InfoSectionSecond from "./InfoSectionSecond";

interface InfoSectionProps {
	popupControl: () => void;
}

const InfoSection: React.FC<InfoSectionProps> = ({ popupControl }) => {
	const [active, setActive] = useState<Number | null>(1);
	const handleClick = (text: Number) => {
		setActive(text);
	};

	const tabStyle = "absolute h-[48px] w-[168px] rounded-xl bg-violet-100 -z-10";

	return (
		<div
			id="services"
			className="flex flex-col gap-8 items-center mx-8 max-w-xs md:max-w-3xl"
		>
			<div className="flex flex-row gap-[8px] bg-gray-100/40 p-[8px] rounded-xl overflow-auto max-w-xs md:max-w-2xl mx-10">
				<div
					className={
						active == 1
							? "ease-in-out duration-300 bg-violet-200 rounded-xl"
							: "ease-in-out duration-300 bg-violet-200/0 rounded-xl"
					}
				>
					<Button
						type={"text"}
						label={"Есть идея"}
						icon={"idea"}
						onClick={() => handleClick(1)}
					/>
				</div>
				<div
					className={
						active == 2
							? "ease-in-out duration-300 bg-violet-200 rounded-xl"
							: "ease-in-out duration-300 bg-violet-200/0 rounded-xl"
					}
				>
					<Button
						type={"text"}
						label={"Есть бизнес"}
						icon={"business"}
						onClick={() => handleClick(2)}
					/>
				</div>
				<div
					className={
						active == 3
							? "ease-in-out duration-300 bg-violet-200 rounded-xl"
							: "ease-in-out duration-300 bg-violet-200/0 rounded-xl"
					}
				>
					<Button
						type={"text"}
						label={"Сделайте мне!"}
						icon={"createForMe"}
						onClick={() => handleClick(3)}
					/>
				</div>
			</div>
			<div className="md:px-16 md:py-8 w-fit bg-gray-100/60 rounded-xl flex flex-col">
				{active == 1 && <InfoSectionFirst action={popupControl} />}
				{active == 2 && <InfoSectionSecond action={popupControl} />}
				{active == 3 && <InfoSectionThird action={popupControl} />}
			</div>
		</div>
	);
};

export default InfoSection;
