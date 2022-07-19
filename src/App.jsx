import { useState } from "react";
import { CheckCirculation } from "./components/CheckCirculation";
import { Popup } from "./components/Popup";
export const App = () => {
	const [popupTitle, setPopupTitle] = useState();
	const [popupDescription, setPopupDescription] = useState();
	const [visible, setVisible] = useState(false);
	const [allowed, setAllowed] = useState(false);

	const checkCiculation = (circulation) => {
		const { success, message } = circulation;
		setVisible(true);
		if (!success) {
			const title = "Error!";
			setPopupTitle(title);
			setPopupDescription(message);
			setAllowed(false);
			return;
		}
		const { allowed, car } = circulation;
		const { placa } = car;
		console.log(circulation);
		const title = allowed ? "Congratulations!" : "Be carefull...";
		const auxDescription = allowed ? "can" : "can't";
		const description = `The car with the following car plate ${auxDescription} circulate (${placa})`;
		setPopupTitle(title);
		setPopupDescription(description);
		setAllowed(allowed);
	};

	const tooglePopup = () => {
		setVisible(false);
	};

	return (
		<>
			<Popup title={popupTitle} description={popupDescription} visible={visible} allowed={allowed} onClosePopup={tooglePopup} />
			<h1>Pico y Placa</h1>
			<CheckCirculation onCheckCirculation={checkCiculation} />
		</>
	);
};
