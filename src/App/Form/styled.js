import styled from "styled-components";

export const Wrapper = styled.form`
    display: block;
    margin-top: 0em;
    text-align: center;
`;

export const LabelText = styled.span`
    font-size: 28px;
    background-color: ${({ theme }) => theme.color.purple};
    border-radius: 4px;
    color: ${({ theme }) => theme.color.white};
    width: 100%;
    max-width: 200px;
    display: inline-block;
    margin-right: 5px;
    padding: 10px;
`;

export const Field = styled.input`
    font-size: 28px;
    border: 1px solid ${({ theme }) => theme.color.solid};
    padding: 10px;
    width: 100%;
    max-width: 350px;
    border-radius: 4px;
`

export const Button = styled.button`
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.purple};
    border: none;
    color: #ffffff;
    text-align: center;
    font-size: 28px;
    padding: 20px;
    width: 558px;
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
        filter: brightness(110%);
    }

    &:hover span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }

    &:hover span:after {
        content: "\00bb";
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
    }

    &:active {
        filter: brightness(120%);
    }

    
`;

export const Header = styled.h1`
    font-size: xx-large;
    padding: 15px;
    color: hsl(0, 0%, 0%);
`;

export const Info = styled.p`
    text-align: center;
    font-size: 20px;
    border-radius: 4px;
    color: rgb(0, 0, 0);
    display: inline-block;
    margin-right: 5px;
    padding: 10px;
`;