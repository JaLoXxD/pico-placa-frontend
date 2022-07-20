import { useState } from "react";
import { useFetchApi } from "../hooks/useFetchApi";

export const CheckCirculation = ({ onCheckCirculation, visible }) => {
	const now = new Date();
	const formatedDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().substring(0, 19);

	const [carPlate, setCarPlate] = useState("");
	const [currentDate, setCurrentDate] = useState(formatedDate);
	const [circulation, setCirculation] = useState();

	const { checkCarPlate, isLoading } = useFetchApi();
	const onCarPlateChange = ({ target }) => {
		setCarPlate(target.value);
	};
	const onDateChange = ({ target }) => {
		setCurrentDate(target.value);
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		const info = await checkCarPlate({ placa: carPlate, date: currentDate });
		setCirculation(info);
		console.log(circulation);
		onCheckCirculation(info);
	};

	return (
		<>
			<div onSubmit={onSubmit} className={`formContainer ${!visible && "hideContainer"}`}>
				<form>
					<div className="customInput">
						<label htmlFor="carPlate">Car Plate:</label>
						<input className="test" id="carPlate" type="text" value={carPlate} onChange={onCarPlateChange} />
					</div>
					<div className="customInput">
						<label htmlFor="date">Date:</label>
						<input className="test" id="date" type="datetime-local" value={currentDate} onChange={onDateChange} />
					</div>
					<input type="submit" value="Check" className="btn btn-success" />
				</form>
			</div>
		</>
	);
};
