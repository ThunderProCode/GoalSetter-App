import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
        padding: 8px;
        height: 40px;
        width: 90%;
        margin-top: 24px;
        border: solid 1px #87888a;
        border-radius: 4px;
        outline: white;
        background:  none;
    }

    @media (min-width: 600px){
        width: 80%;
        input {
            margin-top: 34px;
            height: 40px;
        }
    }
    
    @media (min-width: 800px){
        width: 60%;
        input {
            margin-top: 34px;
            height: 40px;
        }
    }

`

export const RegisterButton = styled.button.attrs({ type:"submit" })`
    margin-top:24px;
    background: black;
    width: 90%;
    height: 40px;
    color: white;
    border-radius: 4px;
    padding: 6px;
    font-weight: 600;

    @media (min-width: 600px){
        margin-top:24px;
        height: 40px;
        font-size: 18px;
    }

`