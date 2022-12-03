import { Card } from "../ui/Card";
import '../expenses/Expenses.css'
import { ExpenseItem } from "../expenses/ExpenseItem";

export const Expenses = ({ items }) => {
    return (
        <Card className="expenses">
            {items.map(ex => <ExpenseItem title={ex.title} date={ex.date} amount={ex.amount} key={ex.id} />)}
        </Card>
    );
}