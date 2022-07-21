import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { AddCar } from "../../src/components/AddCar";

describe("tests on AddCar component", () => {
	const testValues = {
		carPlate: "PUH-318",
		color: "blue",
		model: "hyundai elantra",
		chasis: "ASDC2123",
		year: "2022",
	};
	test("should change inputs values", () => {
		render(<AddCar />);
		const carPlate = screen.getByRole("carPlate");
		const color = screen.getByRole("color");
		const model = screen.getByRole("model");
		const chasis = screen.getByRole("chasis");
		const year = screen.getByRole("year");

		fireEvent.input(carPlate, { target: { value: testValues.carPlate } });
		fireEvent.input(color, { target: { value: testValues.color } });
		fireEvent.input(model, { target: { value: testValues.model } });
		fireEvent.input(chasis, { target: { value: testValues.chasis } });
		fireEvent.input(year, { target: { value: testValues.year } });

		expect(carPlate.value).toBe(testValues.carPlate);
		expect(color.value).toBe(testValues.color);
		expect(model.value).toBe(testValues.model);
		expect(chasis.value).toBe(testValues.chasis);
		expect(year.value).toBe(testValues.year);
	});
	test("should exec onCheckForm function on form submit and clean inputs", async () => {
		const checkForm = jest.fn();

		render(<AddCar onCheckForm={checkForm} />);

		const carPlate = screen.getByRole("carPlate");
		const color = screen.getByRole("color");
		const model = screen.getByRole("model");
		const chasis = screen.getByRole("chasis");
		const year = screen.getByRole("year");
		const form = screen.getByRole("form");

		fireEvent.input(carPlate, { target: { value: testValues.carPlate } });
		fireEvent.input(color, { target: { value: testValues.color } });
		fireEvent.input(model, { target: { value: testValues.model } });
		fireEvent.input(chasis, { target: { value: testValues.chasis } });
		fireEvent.input(year, { target: { value: testValues.year } });

		await waitFor(() => {
			fireEvent.submit(form);
			expect(carPlate.value).toBe("");
			expect(color.value).toBe("");
			expect(model.value).toBe("");
			expect(chasis.value).toBe("");
			expect(year.value).toBe("");
			expect(checkForm).toHaveBeenCalled();
		});

		screen.debug();
		console.log(carPlate.value);
	});
});
