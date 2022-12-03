import { Card } from '../ui/Card';
import { ExpenseDate } from '../expenses/ExpenseDate';
import '../expenses/ExpenseItem.css';
import { useState } from 'react';

export const ExpenseItem = ({ title, date, amount }) => {
    const [titleNew, setTitleNew] = useState(title);

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{titleNew}</h2>
                <div className='expense-item__price'>{amount} €</div>
            </div>
            <button onClick={() => setTitleNew("New title")}>Change title</button>
        </Card>
    )
}