import React, { useState } from "react";
import { useRatesData } from "./useRatesData";
import { Result } from "./Result";
import {
    StyleForm,
    Button,
    Field,
    Header,
    Info,
    LabelText,
    Loading,
    Fail,
} from "./styled";


const Form = () => {

    const [result, setResult] = useState();
    const { rates, state, date } = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = rates[currency].value;

        setResult({
            targetAmount: amount * rate,
            currency,
            date: new Date(date).toLocaleDateString("pl-PL"),
        });
    };

    const [currency, setCurrency] = useState();
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <StyleForm
            onSubmit={onSubmit}>
            <Header>
                Kantor Online
            </Header>
            {state === "loading"
                ? (
                    <Loading>
                        Momencik...<br /> Ładujemy kursy walut
                    </Loading>
                )
                : (
                    state === "error" ? (
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
                                        onChange={({ target }) => setCurrency(target.value)}
                                    >
                                        {Object.keys(rates).map((currency => (
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
                            <Info>
                                Aktalne kursy walut ze strony nbp.pl z dnia 2023-08-16
                            </Info>
                            <p><strong></strong>
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