import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form
            className="form"
            onSubmit={onSubmit}>
            <h1
                className="container__header">
                Kantor Online
            </h1>
            <p>
                <label>
                    <span className="form__labelText">
                        Kwota zł :
                    </span>
                    <input
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
                    <span className="form__labelText">
                        Waluta :
                    </span>
                    <select
                        className="form__field"
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
                    </select>
                </label>
            </p>
            <p>
                <button
                    className="form__button">
                    <span>Przelicz </span>
                </button>
            </p>
            <p className="form__info">
                Aktalne kursy walut ze strony nbp.pl z dnia 2023-08-16
            </p>
            <p className="form__result"><strong></strong>
            </p>

            <Result result={result} />
        </form >
    );
};