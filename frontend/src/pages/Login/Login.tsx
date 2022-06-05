import React from 'react';
import { useState } from 'react';
import { LoginForm } from '../../Types/RegisterTypes';
import { Section, Form, RegisterButton, Wrapper } from './LoginStyles';
import { SignInIcon } from '../../styles/IconStyles';
import { Title, SubTitle } from '../../styles/AppStyle';

const formInitialState:LoginForm = {
    email: '',
    password: '',
}

const Login = () => {

    const [formData, setFormData] = useState<LoginForm>(formInitialState);
    const { email, password} = formData;

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setFormData((prevState) =>({
            ...prevState,
            [target.name]: target.value,
        }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
 
        <Wrapper>
            <Section>
                <Title>
                    <SignInIcon/>Login
                </Title>
                <SubTitle>Please login to your account</SubTitle>
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