"use client";

import Button from "../../Button";
interface InfoSectionProps {
	action: () => void;
}

const InfoSectionThird: React.FC<InfoSectionProps> = ({ action }) => {
	return (
		<div className="flex flex-col gap-[24px] p-4">
			<h3 className="text-md sm:text-xl md:text-4xl font-bold">
				У вас еще нет четкой идеи бизнеса
				<br />
				но вы хотите переехать в Европу?
			</h3>
			<div className="gap-[8px] flex flex-col bg-white py-[16px] px-[24px] rounded-xl text-violet-500 max-w-2xl">
				<p>
					Мы поможем получить стартап визу и обеспечим
					<br /> стабильный заработок для вас и вашей семьи
					<br /> за границей!
				</p>
			</div>
			<p className="text-gray-500">
				<b className="text-black">12 последовательных шагов</b> от первичного
				описания
				<br /> до проведения исследований и расчета финансовой
				<br /> модели,{" "}
				<b>
					позволят нам вместе с вами создать стартап,
					<br /> который принесет прибыль!
				</b>
			</p>
			<Button label="Оставить заявку" onClick={action} type="fill" />
		</div>
	);
};

export default InfoSectionThird;
