import { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = () => {
    // const [title, setTitle] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');

    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: '',
    });

    const onTitleChange = (event) => {
        setUserInput((prevState) => {
            return {
                ...userInput,
                title: event.target.value,
            };
        });
    }

    const onAmountChange = (event) => {
        setUserInput((prevState) => {
            return {
                ...userInput,
                amount: event.target.value,
            };
        });
    }

    const onDateChange = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                date: event.target.value,
            };
        });
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={onTitleChange} value={userInput.title} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={onAmountChange} value={userInput.amount} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2023-12-31' onChange={onDateChange} value={userInput.date} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    );
}