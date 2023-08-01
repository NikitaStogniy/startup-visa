import Image from "next/image";

const Partners = () => {
	return (
		<div id="partners" className="flex flex-col align-center w-full">
			<h3 className="font-bold text-3xl text-center py-8">Наши партнеры</h3>
			<div className="flex center flex-col items-center align-center justify-center w-full bg-gray-100 py-10 lg:flex-row">
				<Image
					width={300}
					height={120}
					alt="Club500 Logo"
					src={"/club500.png"}
				/>
				<Image
					width={300}
					height={120}
					alt="Club500 Logo"
					src={"/kryzok.png"}
				/>
				<Image width={300} height={120} alt="Club500 Logo" src={"/lcg.png"} />
				<Image
					width={300}
					height={120}
					alt="Club500 Logo"
					src={"/Blitzguard.png"}
				/>
			</div>
		</div>
	);
};

export default Partners;
