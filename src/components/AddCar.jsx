import { useState } from "react";
import { useFetchApi } from "../hooks/useFetchApi";

export const AddCar = ({ onCheckForm, visible }) => {
	const [carPlate, setCarPlate] = useState("");
	const [color, setColor] = useState("");
	const [model, setModel] = useState("");
	const [chasis, setChasis] = useState("");
	const [year, setYear] = useState("");

	const { newCar, isLoading } = useFetchApi();

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		if (name === "carPlate") return setCarPlate(value);
		if (name === "color") return setColor(value);
		if (name === "model") return setModel(value);
		if (name === "chasis") return setChasis(value);
		if (name === "year") return setYear(value);
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
		setCarPlate("");
		setColor("");
		setModel("");
		setChasis("");
		setYear("");
	};

	return (
		<div onSubmit={onSubmit} className={`formContainer ${!visible && "hideContainer"}`}>
			<form role="form">
				<div className="customInput">
					<label htmlFor="carPlate">Car Plate:</label>
					<input className="test" role="carPlate" name="carPlate" type="text" value={carPlate} onChange={onInputChange} />
				</div>
				<div className="customInput">
					<label htmlFor="ccolorolor">Color:</label>
					<input className="test" role="color" name="color" type="text" value={color} onChange={onInputChange} />
				</div>
				<div className="customInput">
					<label htmlFor="model">Model:</label>
					<input className="test" role="model" name="model" type="text" value={model} onChange={onInputChange} />
				</div>
				<div className="customInput">
					<label htmlFor="chasis">Chasis:</label>
					<input className="test" role="chasis" name="chasis" type="text" value={chasis} onChange={onInputChange} />
				</div>
				<div className="customInput">
					<label htmlFor="year">Year:</label>
					<input className="test" role="year" name="year" type="number" value={year} onChange={onInputChange} />
				</div>
				<input type="submit" value="Add Car" className="btn btn-success" />
			</form>
		</div>
	);
};
