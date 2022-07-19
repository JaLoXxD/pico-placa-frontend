// const apiUrl = "https://pico-placa.herokuapp.com";
const apiUrl = "http://localhost:8082";

const checkCirculation = async (formInfo) => {
	const { placa, date } = formInfo;
	const request = await fetch(`${apiUrl}/checkCar?placa=${placa}&date=${date}`);
	const data = await request.json();
	return { data };
};

export { checkCirculation };
