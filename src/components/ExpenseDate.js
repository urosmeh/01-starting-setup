import './ExpenseDate.css';

export const ExpenseDate = ({ date }) => {
    const day = date.toLocaleString('sl-SI', { day: '2-digit' });
    const month = date.toLocaleString('sl-SI', { month: 'long' });
    const year = date.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    )
}