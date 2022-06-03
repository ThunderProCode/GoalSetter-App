import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';

export const Header = styled.header`
    width: 100%;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;;
    margin-bottom: 24px;
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
    justify-content: space-between;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const SignInIcon = styled(FaSignInAlt)`
    font-size: 14px;
    margin-right: 4px;
`
export const UserIcon = styled(FaUser)`
    font: 14px;
    margin-right: 4px;
`