import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm'

export const NewExpense = ({ onAddExpense }) => {
    const onSubmitExpenseHandler = (data) => {
        const expenseData = { ...data, id: Math.random().toString() };
        onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSubmitExpenseData={onSubmitExpenseHandler} />
        </div>
    );
}