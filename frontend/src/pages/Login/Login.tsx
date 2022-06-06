import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { login, reset } from '../../features/auth/authSlice';

import { LoginForm } from '../../Types/RegisterTypes';
import { Section, Form, RegisterButton, Wrapper } from './LoginStyles';
import { SignInIcon } from '../../styles/IconStyles';
import { Title, SubTitle } from '../../styles/AppStyle';
import Spinner from '../../components/Spinner/Spinner';


const formInitialState:LoginForm = {
    email: '',
    password: '',
}

const Login = () => {

    const [formData, setFormData] = useState<LoginForm>(formInitialState);
    const { email, password} = formData;

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(()=> {
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navigate('/')
        }

        dispatch(reset())

    },[user,isError,isSuccess,message, navigate, dispatch])

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setFormData((prevState) =>({
            ...prevState,
            [target.name]: target.value,
        }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            email, 
            password
        }
        dispatch(login(userData))
    }

    if(isLoading){
        return <Spinner/>
    }

    return (
        <Wrapper>
            <Section>
                <Title>
                    <SignInIcon/>Login
                </Title>
                <SubTitle>Login and start setting goals</SubTitle>
            </Section>

            <Form onSubmit={handleSubmit} >
                <input type="email" 
                    id='email'
                    name='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={handleChange}
                />
                <input type="password" 
                    id='password'
                    name='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={handleChange}
                />
            <RegisterButton>Login</RegisterButton>
            </Form>
        </Wrapper>
    );
};

export default Login;