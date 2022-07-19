import { useEffect, useState } from "react";
import { checkCirculation } from "../helpers/fetchApi";

export const useFetchApi = () => {
	const [isLoading, setIsLoading] = useState(true);

	const checkCarPlate = async (formInfo) => {
		const { data } = await checkCirculation(formInfo);
		console.log(data);
		setIsLoading(false);
		return data;
	};

	return {
		checkCarPlate,
		isLoading,
	};
};
