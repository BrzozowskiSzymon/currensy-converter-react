import React, { useState } from "react";
import { useRatesData } from "./useRatesData";
import { Result } from "./Result";
import Adnotation from "../Info.js";
import {
    StyleForm,
    Button,
    Field,
    Header,
    LabelText,
    Loading,
    Fail,
} from "./styled";

export const Form = () => {
    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null);
    const ratesData = useRatesData();

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    const calculateResult = (currency, amount) => {
        if (ratesData.data && ratesData.data[currency] && ratesData.data[currency].value) {
            const rate = ratesData.data[currency].value;

            setResult({
                sourceAmount: +amount,
                targetAmount: amount * rate,
                currency,
            });
        } else {
            console.error("Brak danych lub niepoprawna wartość waluty.");
        }
    };

    return (
        <StyleForm
            onSubmit={onSubmit}>
            <Header>
                Kantor Online
            </Header>
            {ratesData.status === "loading"
                ? (
                    <Loading>
                        Momencik...<br /> Ładujemy kursy walut
                    </Loading>
                )
                : (
                    ratesData.status === "error" ? (
                        <Fail>
                            Coś nie działa, sprawdź połączenie z internetem
                        </Fail>
                    ) : (
                        <>

                            <p>
                                <label>
                                    <LabelText>
                                        Kwota zł :
                                    </LabelText>
                                    <Field
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                        placeholder="Wpisz kwote"
                                        type="number"
                                        required
                                        step="0.01"
                                        min="1"
                                        autoFocus
                                    />
                                </label>
                            </p>
                            <p>
                                <label>
                                    <LabelText>
                                        Waluta :
                                    </LabelText>
                                    <Field
                                        as="select"
                                        value={currency}
                                        onChange={({ target }) => setCurrency(target.value)}
                                    >
                                        {Object.keys(ratesData.data).map((currency => (
                                            <option
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency}
                                            </option>
                                        )))}
                                    </Field>
                                </label>
                            </p>
                            <p>
                                <Button>
                                    <span>Przelicz </span>
                                </Button>
                            </p>
                            <Adnotation />
                            <p>
                                <strong></strong>
                            </p>

                            <Result result={result} />
                        </>
                    )
                )
            }
        </StyleForm >
    );
};

export default Form;