import { checkCirculation, getAllCars } from "../../src/helpers/fetchApi";

describe("tests on fetchApi helper", () => {
	test("should return car info if the function recieves a car plate and a date", async () => {
		const formData = {
			placa: "PUH-344",
			date: "2022-07-20T21:25:20",
		};
		const response = await checkCirculation(formData);
		const { car } = response.data;
		expect(car).toHaveProperty("_id", "placa", "color", "modelo", "chasis", "anio");
	});

	test("should return all cars", async () => {
		const response = await getAllCars();
		const { cars } = response;
		expect(cars.length).toBeGreaterThan(0);
	});
});
