import { useEffect, useState } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.currencyapi.com/v3/latest?apikey=cur_live_cbCeMWO3fFLv8EUHGIQcJFq3vsydTNKYzJIRjrIj&currencies=EUR%2CUSD%2CCAD&base_currency=PLN"
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { data } = await response.json();

        setRatesData({
          state: "success",
          data,
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };

    setTimeout(fetchData, 1000);
  }, []);

  return ratesData;
};