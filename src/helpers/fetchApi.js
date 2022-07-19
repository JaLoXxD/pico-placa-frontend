const apiUrl = "https://pico-placa.herokuapp.com";

const checkCirculation = async (formInfo) => {
	const config = {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(formInfo),
	};
	const request = await fetch(`${apiUrl}/checkCar`, config);
	const data = await request.json();
	return data;
};

export { checkCirculation };
