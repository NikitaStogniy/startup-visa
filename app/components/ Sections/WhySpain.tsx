import Image from "next/image";

const WhySpain = () => {
	return (
		<div
			id="whyspain"
			className="flex flex-col justify-center gap-12 lg:flex-row p-4"
		>
			<Image
				width={510}
				height={538}
				className="rounded-xl"
				src={"/spain.png"}
				alt={"Spain Image"}
			/>
			<div className="flex flex-col gap-[16px]">
				<h3 className="font-bold text-3xl">Почему Испания?</h3>
				<div className="flex flex-col gap-[16px]">
					<div className="flex flex-row gap-[16px] items-center">
						<div
							className="h-[24px] w-[24px] bg-no-repeat bg-contain bg-center"
							style={{ backgroundImage: "url(/CheckIcon.svg)" }}
						/>
						<div className="text-gray-400">
							Доступ к финансовым услугам государства (вклады,
							<br /> кредиты, ипотеки и т.д.)
						</div>
					</div>
					<div className="flex flex-row gap-[16px] items-center">
						<div
							className="h-[24px] w-[24px] bg-no-repeat bg-contain bg-center"
							style={{ backgroundImage: "url(/CheckIcon.svg)" }}
						/>
						<div className="text-gray-400">
							Ощутимые налоговые льготы для предпринимателей
						</div>
					</div>
					<div className="flex flex-row gap-[16px] items-center">
						<div
							className="h-[24px] w-[24px] bg-no-repeat bg-contain bg-center"
							style={{ backgroundImage: "url(/CheckIcon.svg)" }}
						/>
						<div className="text-gray-400">
							ВНЖ для всей семьи (с правом официального
							<br /> трудоустройства)
						</div>
					</div>
					<div className="flex flex-row gap-[16px] items-center">
						<div
							className="h-[24px] w-[24px] bg-no-repeat bg-contain bg-center"
							style={{ backgroundImage: "url(/CheckIcon.svg)" }}
						/>
						<div className="text-gray-400">
							Посещение стран Шенгена без дополнительных
							<br /> документов
						</div>
					</div>
					<div className="flex flex-row gap-[16px] items-center">
						<div
							className="h-[24px] w-[24px] bg-no-repeat bg-contain bg-center"
							style={{ backgroundImage: "url(/CheckIcon.svg)" }}
						/>
						<div className="text-gray-400">
							Возможность пользования медицинским
							<br /> обслуживанием в Испании
						</div>
					</div>
					<div className="flex flex-row gap-[16px] items-center">
						<div
							className="h-[24px] w-[24px] bg-no-repeat bg-contain bg-center"
							style={{ backgroundImage: "url(/CheckIcon.svg)" }}
						/>
						<div className="text-gray-400">
							Дальнейшая возможность получения ПМЖ (после 5 лет)
							<br /> и гражданства (после 10 лет проживания)
						</div>
					</div>
					<div className="flex flex-row gap-[16px] items-center">
						<div
							className="h-[24px] w-[24px] bg-no-repeat bg-contain bg-center"
							style={{ backgroundImage: "url(/CheckIcon.svg)" }}
						/>
						<div className="text-gray-400">
							Действие стартап-визы сроком на три года
							<br /> с возможностью продления (на 2 года)
						</div>
					</div>
					<div className="flex flex-row gap-[16px] items-center">
						<div
							className="h-[24px] w-[24px] bg-no-repeat bg-contain bg-center"
							style={{ backgroundImage: "url(/CheckIcon.svg)" }}
						/>
						<div className="text-gray-400">
							Для пребывания в стране первые 6 месяцев достаточно
							<br /> только действующего загранпаспорта
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhySpain;
