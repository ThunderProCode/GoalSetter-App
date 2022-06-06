import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { Section, Form, RegisterButton, Wrapper } from './RegisterStyles';
import { UserIcon } from '../../styles/IconStyles';
import { Title, SubTitle } from '../../styles/AppStyle';
import { register, reset } from '../../features/auth/authSlice';
import Spinner from '../../components/Spinner/Spinner';

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = formData

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

    const handleChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

      const handleSubmit = (e) => {
        e.preventDefault()
    
        if (password !== password2) {
          toast.error('Passwords do not match')
        } else {
          const userData = {
            name,
            email,
            password,
          }
    
          dispatch(register(userData))
        }
      }


    if(isLoading){
        return <Spinner/>
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