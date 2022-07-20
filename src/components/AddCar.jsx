import { useState } from "react";
import { useFetchApi } from "../hooks/useFetchApi";

export const AddCar = ({ onCheckForm, visible }) => {
	const [carPlate, setCarPlate] = useState("");
	const [color, setColor] = useState("");
	const [model, setModel] = useState("");
	const [chasis, setChasis] = useState("");
	const [year, setYear] = useState("");

	const { newCar, isLoading } = useFetchApi();

	const onCarPlateChange = ({ target }) => {
		setCarPlate(target.value);
	};

	const onColorChange = ({ target }) => {
		setColor(target.value);
	};

	const onModelChange = ({ target }) => {
		setModel(target.value);
	};

	const onChasisChange = ({ target }) => {
		setChasis(target.value);
	};

	const onYearChange = ({ target }) => {
		setYear(target.value);
	};

	

	const onSubmit = async (e) => {
		e.preventDefault();
		const carInfo = {
			placa: carPlate,
			color: color,
			modelo: model,
			chasis: chasis,
			anio: String(year),
		};
		const data = await newCar(carInfo);
		onCheckForm(data);
	};

	return (
		<div onSubmit={onSubmit} className={`formContainer ${!visible && "hideContainer"}`}>
			<form>
				<div className="customInput">
					<label htmlFor="carPlate">Car Plate:</label>
					<input className="test" id="carPlate" type="text" value={carPlate} onChange={onCarPlateChange} />
				</div>
				<div className="customInput">
					<label htmlFor="color">Color:</label>
					<input className="test" id="color" type="text" value={color} onChange={onColorChange} />
				</div>
				<div className="customInput">
					<label htmlFor="model">Model:</label>
					<input className="test" id="model" type="text" value={model} onChange={onModelChange} />
				</div>
				<div className="customInput">
					<label htmlFor="chasis">Chasis:</label>
					<input className="test" id="chasis" type="text" value={chasis} onChange={onChasisChange} />
				</div>
				<div className="customInput">
					<label htmlFor="year">Year:</label>
					<input className="test" id="year" type="number" value={year} onChange={onYearChange} />
				</div>
				<input type="submit" value="Add Car" className="btn btn-success" />
			</form>
		</div>
	);
};
