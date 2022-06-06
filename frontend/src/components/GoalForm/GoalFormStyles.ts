import styled from "styled-components";

export const Section = styled.section`
    margin-top: 24px;
    width: 90%;
`

export const Form = styled.form`
    width: 100%;
`

export const Container = styled.div`
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    label{
        font-weight: 500;
        margin: 0;
    }

    input {
        width: 100%;
        margin-top: 12px;
        padding: 8px;
        border-radius: 4px;
        outline: white;
        border: solid 1px #87888a;
    }
`

export const Button = styled.button`
    width: 100%;
    margin-top: 12px;
    background: black;
    border-radius: 4px;
    color: white;
    font-weight: 600;
    padding: 8px;
`
