import { useState } from "react";
import { checkCirculation, addCar } from "../helpers/fetchApi";

export const useFetchApi = () => {
	const [isLoading, setIsLoading] = useState(true);

	const checkCarPlate = async (formInfo) => {
		const { data } = await checkCirculation(formInfo);
		setIsLoading(false);
		return data;
	};

	const newCar = async (carData) => {
		const response = await addCar(carData);
		setIsLoading(false);
		return response;
	};

	return {
		checkCarPlate,
		newCar,
		isLoading,
	};
};
