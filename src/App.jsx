import { useState } from "react";
import { AddCar } from "./components/AddCar";
import { CheckCirculation } from "./components/CheckCirculation";
import { Popup } from "./components/Popup";
export const App = () => {
	const [popupTitle, setPopupTitle] = useState();
	const [popupDescription, setPopupDescription] = useState();
	const [visible, setVisible] = useState(false);
	const [allowed, setAllowed] = useState(false);
	const [opt, setOpt] = useState("add");

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
		const title = allowed ? "Congratulations!" : "Be carefull...";
		const auxDescription = allowed ? "can" : "can't";
		const description = `The car with the following car plate ${auxDescription} circulate (${placa})`;
		setPopupTitle(title);
		setPopupDescription(description);
		setAllowed(allowed);
	};

	const checkForm = (response) => {
		const { success, message } = response;
		setVisible(true);
		if (!success) {
			const title = "Error!";
			setPopupTitle(title);
			setPopupDescription(message);
			setAllowed(false);
			return;
		}
		const title = "Congratulations!";
		setPopupTitle(title);
		setPopupDescription(message);
		setAllowed(success);
		console.log(response);
	};

	const tooglePopup = () => {
		setVisible(false);
	};

	return (
		<>
			<Popup title={popupTitle} description={popupDescription} visible={visible} allowed={allowed} onClosePopup={tooglePopup} />
			<h1>Pico y Placa</h1>
			<div className="buttons">
				<button
					onClick={() => {
						setOpt("check");
					}}
					className={`${opt === "check" && "active"}`}>
					Check Circulation
				</button>
				<button
					onClick={() => {
						setOpt("add");
					}}
					className={`${opt === "add" && "active"}`}>
					Add Car
				</button>
			</div>
			<CheckCirculation onCheckCirculation={checkCiculation} visible={opt === "check" && true} />
			<AddCar onCheckForm={checkForm} visible={opt === "add" && true} />
		</>
	);
};
