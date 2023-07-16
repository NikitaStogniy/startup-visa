"use client";

import Button from "../Button";

const Heading = () => {
	return (
		<div
			className="mt-24 bg-no-repeat bg-top  max-h-screen aspect-[9/16] lg:aspect-video w-9/12 bg-contain m-8 md:my-32 flex items-center flex-col gap-[65px]"
			style={{ backgroundImage: "url(/Vector.svg)" }}
		>
			<h1 className="mt-4 md:mt-0 text-lg sm:text-xl md:text-6xl font-bold text-center center">
				<span className="text-violet-600">Startup Visa</span>
				<br />
				ВНЖ в Испании + проект
			</h1>
			<div className="backdrop-blur-xl bg-gray/95 rounded-xl w-fit center flex p-4 md:p-12 flex-col gap-[16px]">
				<h2 className="text-lg sm:text-xl md:text-2xl center text-center">
					Что такое стартап-виза ?
				</h2>
				<p className="center text-center text-gray-500 ">
					Это специальная программа государства для привлечения, поддержки
					<br />и релокации перспективных предпринимателей, которые хотят
					создать
					<br />и масштабировать свой бизнес в Европе, тем самым привлекая
					<br />в страну инвестиции и создавая новые рабочие места.
				</p>
			</div>
			<Button type={"fill"} label={"Выбрать предложение"} />
		</div>
	);
};

export default Heading;
