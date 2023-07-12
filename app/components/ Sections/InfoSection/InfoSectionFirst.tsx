"use client";

const InfoSectionFirst = () => {
	const FirstSection = [
		"Первичное описание",
		"Оценка рынка",
		"Определение целевой аудитории",
		"Изучение целевой аудитории",
		"Изучение конкурентов",
		"Подробное описание будущего продукта",
		"Уточнение предлагаемого решения",
		"При необходимости создание MVP — максимально простой версии продукта",
		"Описание бизнес-процессов",
		"Дизайн решения для проекта",
		"Формирование дорожной карты по разработке проекта",
		"Расчет финансовой модели",
	];
	return (
		<div className="flex flex-col gap-[24px] w-full">
			<h3 className="text-md sm:text-xl md:text-4xl font-bold ">
				У вас есть идея бизнеса в Европе,
				<br /> но она ещё не запущена?
			</h3>
			<p className="text-gray-500">12 шагов для развития вашей идеи:</p>
			<div className="gap-[16px] grid grid-cols-1 md:grid-cols-2  max-w-sm md:max-w-xl">
				{FirstSection.map((text, index) => (
					<div key={index} className="flex flex-row gap-[16px] items-center">
						<div
							className="h-[24px] w-[24px] bg-no-repeat bg-cover bg-center"
							style={{ backgroundImage: "url(/CheckIcon.svg)" }}
						/>
						<div className="text-gray-400 max-w-sm md:max-w-xl w-fit">
							{text}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default InfoSectionFirst;
