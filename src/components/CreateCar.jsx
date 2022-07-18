export const CreateCar = () => {
	return (
		<>
			<div className="formContainer">
				<form>
					<div className="customInput">
						<label htmlFor="placa">Placa:</label>
						<input className="test" id="placa" type="text" />
					</div>
					<div className="customInput">
						<label htmlFor="fecha">Fecha y Hora:</label>
						<input className="test" id="fecha" type="datetime-local" />
					</div>
					<input type="submit" value="Search" className="btn btn-success" />
				</form>
			</div>
		</>
	);
};
