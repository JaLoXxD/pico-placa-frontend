import { useFetchApi } from "../../src/hooks/useFetchApi";
import { renderHook, waitFor } from "@testing-library/react";

describe("tests on useFetchApi hook", () => {
	const formData = {
		placa: "PUH-344",
		date: "2022-07-20T21:25:20",
	};

	test("should return the initial state", async () => {
		const { result } = renderHook(() => useFetchApi());
		const { checkCarPlate, allCars, isLoading, newCar } = result.current;

		expect(isLoading).toBeTruthy();
		expect(allCars).toBeTruthy();
		expect(checkCarPlate).toBeTruthy();
		expect(newCar).toBeTruthy();
	});
});
