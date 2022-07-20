// const apiUrl = "https://pico-placa.herokuapp.com";
const apiUrl = "http://localhost:8082";

const checkCirculation = async (formInfo) => {
	const { placa, date } = formInfo;
	const request = await fetch(`${apiUrl}/checkCar?placa=${placa}&date=${date}`);
	const data = await request.json();
	return { data };
};

const addCar = async (carData) => {
	const config = {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(carData),
	};
	const request = await fetch(`${apiUrl}/createCar`, config);
	const response = await request.json();
	return response;
};

export { checkCirculation, addCar };
