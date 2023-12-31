"use client";

import { useState } from "react";

const Faq = () => {
	const [opened, setOpened] = useState<null | Number>(null);
	const toggle = (index: Number) => {
		if (opened == index) {
			setOpened(null);
		} else {
			setOpened(index);
		}
	};
	const FaqData = [
		{
			question:
				"В какие сроки реально разработать проект стартапа\n (от идеи до документов на руки)?",
			answer:
				"За 1-2 месяца при работе с нашей командой «под ключ» вы получите подробный долгосрочный бизнес-план.",
		},
		{
			question: "Важно ли моё участие в исследовании стартапа?",
			answer:
				"Да, безусловно. Мы проводим полный цикл исследований, предлагаем возможные направления развития проекта и даем рекомендации, но в конечном счете вы решаете, какой продукт хотите разработать.",
		},
		{
			question:
				"Какие возможности открываются после получения стартап-визы Испании?",
			answer:
				"Стартап-виза дает возможность проживать и легально работать в стране, а также перевезти с собой семью: детей, супруга, родителей.",
		},
		{
			question: "Где подаются документы на стартап-визу?",
			answer: "Лично в Испании. ",
		},
		{
			question: "Каковы сроки рассмотрения заявки на стартап-визу?",
			answer:
				"Сроки рассмотрения заявки на стартап-визу могут варьироваться, но обычно составляют от 90 до 110 дней.",
		},
	];
	const accordion = " text-gray-400 py-4 ease-in-out duration-300";
	const openedAccordion = "opacity-100 h-fit scale-10" + accordion;
	const closedAccordion = "opacity-0 h-[0px] scale-0 " + accordion;
	return (
		<div id="faq">
			<div className="flex flex-col align-center w-full">
				<h3 className="font-bold text-3xl text-center py-8">
					Часто задаваемые вопросы
				</h3>
				<div className="m-8 flex flex-col">
					{FaqData.map((faq, index) => (
						<div
							className="h-auto cursor-pointer flex flex-row justify-between gap-[16px] items-center"
							key={index}
							onClick={() => toggle(index)}
						>
							<div className="max-w-3xl py-4">
								<div className="font-semibold text-xl w-full">
									{faq.question}
								</div>
								<div
									className={
										opened === index ? openedAccordion : closedAccordion
									}
								>
									{faq.answer}
								</div>
								<hr />
							</div>
							<div className="-mt-10">
								{opened == index ? (
									<div
										className="h-[24px] w-[24px] bg-no-repeat bg-cover bg-center"
										style={{ backgroundImage: "url(/minus-circle.svg)" }}
									/>
								) : (
									<div
										className="h-[24px] w-[24px] bg-no-repeat bg-cover bg-center"
										style={{ backgroundImage: "url(/plus-circle.svg)" }}
									/>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Faq;
