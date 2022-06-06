import React from 'react';
import { Header,Logo,Ul,StyledLink, Button } from './PageHeaderStyles';
import { SignInIcon, SignOutIcon, UserIcon } from '../../styles/IconStyles';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';


const PageHeader = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <Header>
            <Logo>
                <StyledLink to='/'>
                    GoalSetter
                </StyledLink>
            </Logo>
            <Ul>
                { user ? (
                    <>
                        <li>
                            <Button onClick={onLogout}>
                                <SignOutIcon/> Logout
                            </Button>
                        </li>
                    </>
                ): 
                (
                <>
                    <li>
                        <StyledLink to='/login'>
                            <SignInIcon/> Login
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to='/register'>
                        <UserIcon/> Register
                        </StyledLink>
                    </li>
                </>
                )}
                
            </Ul>
        </Header>
    );
};

export default PageHeader;