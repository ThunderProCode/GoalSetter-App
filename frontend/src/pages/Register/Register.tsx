import React from 'react';
import { useState } from 'react';
import { RegisterForm } from '../../Types/RegisterTypes';
import { Section, Form, RegisterButton, Wrapper } from './RegisterStyles';
import { UserIcon } from '../../styles/IconStyles';
import { Title, SubTitle } from '../../styles/AppStyle';

const formInitialState:RegisterForm = {
    name: '',
    email: '',
    password: '',
    password2: ''
}

const Register = () => {

    const [formData, setFormData] = useState<RegisterForm>(formInitialState);
    const { name, email, password, password2 } = formData;

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
                    <UserIcon/>Register
                </Title>
                <SubTitle>Please create an account</SubTitle>
            </Section>

            <Form onSubmit={handleSubmit} >
                <input type="text" 
                        id='name'
                        name='name'
                        placeholder='Enter your name'
                        value={name}
                        onChange={handleChange}
                />
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
                <input type="password" 
                    id='password2'
                    name='password2'
                    placeholder='Confirm your password'
                    value={password2}
                    onChange={handleChange}
                />
            <RegisterButton>Submit</RegisterButton>
            </Form>
        </Wrapper>

    );
};

export default Register;