import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { 
    StyleForm,
    Button,
    Field,
    Header,
    Info,
    LabelText, 
} from "./styled";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
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
            <p>
                <label>
                    <LabelText>
                        Kwota zł :
                    </LabelText>
                    <Field
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        placeholder="Wpisz kwote"
                        className="form__field"
                        type="number"
                        required
                        step="0.01"
                        min="1"
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
                        {currencies.map((currency => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
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
        </StyleForm >
    );
};