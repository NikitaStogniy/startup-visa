import Image from "next/image";
import Button from "../Button";
import { MouseEvent } from "react";
interface FormProps {
	popupControl: () => void;
}
const Form: React.FC<FormProps> = ({ popupControl }) => {
	return (
		<div className="w-3/4 bg-gray-100 rounded-xl flex flex-col justify-center align-center items-center py-10 gap-[32px]">
			<Image width={120} height={56} src="/Avatars.png" alt="Our team" />
			<div className="center gap-[8px] text-center">
				<h4 className="font-semibold text-xl">Остались вопросы?</h4>
				<p className="text-gray-400 text-md">
					Напишите их нам и мы дадим ответ в течение 24 часов.
				</p>
			</div>
			<Button onClick={popupControl} type={"fill"} label={"Связаться"} />
		</div>
	);
};
export default Form;
