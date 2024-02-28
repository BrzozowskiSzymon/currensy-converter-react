import { useState, useEffect } from "react";
import { fetchRatesData } from "./fetchRatesData.js";

export const useRatesData = () => {
	const [ratesData, setRatesData] = useState({
		status: "loading",
	});

	const getCurrenciesRates = async () => {
		try {
			const { meta, data} = await fetchRatesData();

			setRatesData({
				status: "success",
				meta,
				data,
			});

		} catch (error) {
			setRatesData({ status: "error" });
		}
	};

	useEffect(() => {
		setTimeout(getCurrenciesRates, 1000);
	}, []);

	return ratesData;
};