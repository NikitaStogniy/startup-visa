import Button from "../Button";

const Footer = () => {
	const links = [
		{ text: "Главная", link: "#" },
		{ text: "Услуги", link: "#" },
		{ text: "О ВНЖ", link: "#" },
		{ text: "Алгоритм", link: "#" },
		{ text: "Партнеры", link: "#" },
		{ text: "FAQ", link: "#" },
	];
	return (
		<div className="w-full bg-gray-100 px-24 py-10">
			<div className="py-8 flex flex-row justify-between w-full align-center items-center">
				<div className="text-3xl font-bold">
					<span className="text-violet-600">Startup</span> Visa
				</div>
				<ul className="hidden flex flex-row gap-16">
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
				<Button type={"outline"} label={"Узнать больше"} />
			</div>
			<hr />
			<div className="flex flex-col md:flex-row gap-8 justify-between text-gray-400 py-10">
				<p>Политика конфиденциальности</p>
				<p>Публичная оферта</p>
			</div>
		</div>
	);
};

export default Footer;
