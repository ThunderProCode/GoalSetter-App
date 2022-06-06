import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Button, Form, Section } from './GoalFormStyles';
import { createGoal } from '../../features/goals/goalsSlice';

const GoalForm = () => {

    const [text, setText] = useState('');

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()
        dispatch(createGoal({text}))
        setText('')
    }

    return (
        <Section>
            <Form onSubmit={onSubmit}>
                <Container>
                    <label htmlFor="text">Goal</label>
                    <input 
                        type="text"
                        name='text'
                        id='text'
                        value={text} 
                        onChange={ (e) => setText(e.target.value) }
                    />
                    <Button type='submit' >Add Goal</Button>
                </Container>
            </Form>
        </Section>
    );
};

export default GoalForm;