import Button from "../Button";

const WhyUs = () => {
	return (
		<div
			id="whyus"
			className="py-8 gap-[24px] flex flex-col items-center justify-center align-center w-full"
		>
			<h3 className="font-bold text-3xl text-center">Почему мы?</h3>
			<div className="flex flex-col md:flex-row gap-4 justify-center">
				<div className="line-through w-fit px-[16px] py-[8px] rounded-xl flex flex-row gap-[8px] bg-gray-100 text-gray-500">
					Стресс
				</div>
				<div className="line-through w-fit px-[16px] py-[8px] rounded-xl flex flex-row gap-[8px] bg-gray-100 text-gray-500">
					Трата времени
				</div>
				<div className="w-fit px-[16px] py-[8px] rounded-xl flex flex-row gap-[8px] bg-violet-100 text-violet-500 items-center">
					Безопасно
					<div
						className="h-[16px] w-[16px] bg-no-repeat bg-contain bg-center"
						style={{ backgroundImage: "url(/Accept.svg)" }}
					/>
				</div>
			</div>
			<div className="bg-gray-100/30 w-full py-10 px-5 md:py-20 md:px-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] max-w-3xl  mx-auto">
					<div className="flex flex-row gap-[16px] items-center">
						<div
							className="h-[24px] w-[24px] bg-no-repeat bg-contain bg-center"
							style={{ backgroundImage: "url(/CheckIcon.svg)" }}
						/>
						<div className="text-gray-400">
							Вы получаете ВНЖ и законно пребываете
							<br /> на территории страны (фаундер + семья)
						</div>
					</div>
					<div className="flex  flex-row gap-[16px] items-center">
						<div
							className="h-[24px] w-[24px] bg-no-repeat bg-contain bg-center"
							style={{ backgroundImage: "url(/CheckIcon.svg)" }}
						/>
						<div className="text-gray-400">
							Легально ведете предпринимательскую
							<br /> деятельность
						</div>
					</div>

					<div className="flex  flex-row gap-[16px] items-center">
						<div
							className="h-[24px] w-[24px] bg-no-repeat bg-contain bg-center"
							style={{ backgroundImage: "url(/CheckIcon.svg)" }}
						/>
						<div className="text-gray-400">
							Экономите деньги, не инвестируя
							<br /> и не вкладываясь в недвижимость
						</div>
					</div>
					<div className="flex flex-row gap-[16px] items-center">
						<div
							className="h-[24px] w-[24px] bg-no-repeat bg-contain bg-center"
							style={{ backgroundImage: "url(/CheckIcon.svg)" }}
						/>
						<div className="text-gray-400">
							Получаете от нас помощь
							<br /> с развитием продукта и далее.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default WhyUs;
