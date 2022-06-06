import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Header = styled.header`
    width: 100%;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    position: absolute;
    top: 0;
`

export const Logo = styled.div`
    padding: 8px;
    font-weight: 500;
`
export const Ul = styled.ul`
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    padding: 8px;
    width: 40%;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: right;
    li {
        margin: 4px;
    }

`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Button = styled.button`
    background: black;
    color:white;
    padding: 6px;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-right: 4px;
    }

`