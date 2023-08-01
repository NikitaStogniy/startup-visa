import Button from "../Button";

interface BannerProps {
	small: Boolean;
	text: string;
	popupControl?: () => void;
}

const Banner: React.FC<BannerProps> = ({ text, small, popupControl }) => {
	let smallLayout = (
		<div className="flex flex-col gap-[16px] bg-violet-700/80 text-white text-center text-md w-full p-4 md:px-24 lg:px-40 md:py-10  md:flex-row justify-center align-center items-center">
			{text}
			<Button
				onClick={popupControl}
				type={"fill"}
				color={"white"}
				label={"Консультация"}
			/>
		</div>
	);

	if (small) {
		return smallLayout;
	} else {
		return (
			<div
				style={{ backgroundImage: "url(/round.svg)" }}
				className="bg-no-repeat bg-top-left bg-violet-500  text-md text-white text-center w-4/5 p-4   md:px-24 lg:px-40 md:py-20 rounded-xl md:text-2xl"
			>
				{text}
			</div>
		);
	}
};

export default Banner;
