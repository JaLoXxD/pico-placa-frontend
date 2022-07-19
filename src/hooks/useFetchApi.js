import { useEffect, useState } from "react";
import { checkCirculation } from "../helpers/fetchApi";

export const useFetchApi = () => {
	const [circulation, setCirculation] = useState();
	const [isLoading, setIsLoading] = useState(true);

	const checkCarPlate = async (formInfo) => {
		const { data } = await checkCirculation(formInfo);
		console.log(data);
		setIsLoading(false);
		setCirculation(data);
	};

	return {
		checkCarPlate,
		circulation,
		isLoading,
	};
};
