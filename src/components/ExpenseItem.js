import { ExpenseDate } from './ExpenseDate';
import './ExpenseItem.css';

export const ExpenseItem = ({ title, date }) => {
    return (
        <div className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>100€</div>
            </div>
        </div>
    )
}