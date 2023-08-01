"use client";

import Button from "../../Button";
interface InfoSectionProps {
	action: () => void;
}

const InfoSectionSecond: React.FC<InfoSectionProps> = ({ action }) => {
	return (
		<div className="flex flex-col gap-[24px] p-4">
			<h3 className="text-md sm:text-xl md:text-4xl font-bold ">
				У вас есть свой бизнес?
			</h3>
			<p className="text-gray-500">
				<span className="font-bold text-black">Startup Visa</span> - отличный
				способ
				<br /> получения ВНЖ в Европе для вас.
			</p>
			<div className="gap-[8px] flex flex-col bg-violet-200/50 py-[16px] px-[24px] rounded-xl text-violet-500 max-w-2xl">
				<h3 className="font-bold text-xl">
					Для предпринимателей – одно условие!
				</h3>
				<p>
					– у вас есть бизнес, который не старше 5 лет
					<br />
					(7 лет для проектов по биотехнологиям, энергетике
					<br />и промышленности).
				</p>
			</div>
			<Button label="Оставить заявку" onClick={action} type="fill" />
		</div>
	);
};

export default InfoSectionSecond;
