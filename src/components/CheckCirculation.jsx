import { useEffect, useState } from "react";
import { useFetchApi } from "../hooks/useFetchApi";

export const CheckCirculation = ({ onCheckCirculation, visible }) => {
	const now = new Date();
	const formatedDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().substring(0, 19);
	const [carPlate, setCarPlate] = useState("");
	const [currentDate, setCurrentDate] = useState(formatedDate);
	const [circulation, setCirculation] = useState();
	const [cars, setCars] = useState([]);

	const { checkCarPlate, isLoading, allCars } = useFetchApi();

	const fetchCars = async () => {
		const resp = await allCars();
		setCars(resp);
		setCarPlate(resp[0].placa)
	};

	useEffect(() => {
		fetchCars();
	}, []);

	const onCarPlateChange = ({ target }) => {
		setCarPlate(target.value);
		setCurrentDate(new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().substring(0, 19));
	};
	const onDateChange = ({ target }) => {
		setCurrentDate(target.value);
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		const info = await checkCarPlate({ placa: carPlate, date: currentDate });
		setCirculation(info);
		onCheckCirculation(info);
	};

	return (
		<>
			<div onSubmit={onSubmit} className={`formContainer ${!visible && "hideContainer"}`}>
				<form>
					<div className="customInput">
						<label htmlFor="carPlate">Car Plate:</label>
						<select name="car" id="carPlate" value={carPlate} onChange={onCarPlateChange}>
							{cars.map(({ _id, placa }) => {
								return (
									<option key={_id} value={placa}>
										{placa}
									</option>
								);
							})}
						</select>
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
