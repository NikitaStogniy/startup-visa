"use client";

import Menu from "./components/Menu";
import Heading from "./components/ Sections/Heading";
import InfoSection from "./components/ Sections/InfoSection/InfoSection";
import Banner from "./components/ Sections/Banner";
import WhyUs from "./components/ Sections/WhyUs";
import WhySpain from "./components/ Sections/WhySpain";
import Alhoritm from "./components/ Sections/Algorithm";
import Partners from "./components/ Sections/Partners";
import Faq from "./components/ Sections/Faq";
import Form from "./components/ Sections/Form";
import Footer from "./components/ Sections/Footer";
import Popup from "./components/Popup";
import { useState, useContext } from "react";

export default function Home() {
	const [popup, setPopup] = useState(false);
	const handlePopup = () => {
		setPopup(!popup);
	};
	return (
		<main className="flex min-h-screen flex-col items-center justify-start gap-20">
			{popup ? <Popup popupControl={handlePopup} /> : ""}

			<Menu popupControl={handlePopup} />
			<Heading />
			<InfoSection popupControl={handlePopup} />
			<Banner
				small={false}
				text={
					"Мы даем возможность начать бизнес в Европе с доходом в евро и получить ВНЖ на 2 года всего за 1 млн. рублей. Берем оплату поэтапно: финальный платёж только после получения готового бизнес-плана."
				}
			/>
			<WhyUs />
			<WhySpain />
			<Banner
				popupControl={handlePopup}
				small={true}
				text={
					"Для подробной консультации оставьте свой номер телефона, и наш специалист с Вами свяжется"
				}
			/>
			<Alhoritm />
			<Partners />
			<Banner
				small={false}
				text={
					"Проекты после нашей Discovery-фазы не просто жизнеспособны, а по-настоящему выгодны и перспективны. А значит не вызовут у властей Испании сомнений в успешности и возможности реализации."
				}
			/>
			<Faq />
			<Form popupControl={handlePopup} />
			<Footer />
		</main>
	);
}
