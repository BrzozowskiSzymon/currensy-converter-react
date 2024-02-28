const API_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_HoaLsFNB0Z18fvXaJGCdbPFmU5eeDwjGtdB7e0E9&currencies=&base_currency=PLN";

export const fetchRatesData = async () => {
	const response = await fetch(API_URL);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const data = await response.json();
	return data;
};