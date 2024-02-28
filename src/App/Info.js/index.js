import { useAdditionalDate } from "./useInfoData";
import { Info } from "./styled.js"

export const Adnotation = (ratesData) => {
    const formattedRatesDay = useAdditionalDate(ratesData)

    return (
        <Info>
            Kursy walut pobierane są z Europejskiego Banku Centralnego<br /> Aktualne na dzień <strong> {formattedRatesDay}</strong>
        </Info>
    )
};

export default Adnotation;