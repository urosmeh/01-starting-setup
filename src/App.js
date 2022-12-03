import { ExpenseItem } from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 1,
      title: "insurance",
      date: new Date(),
      price: 100,
    },
    {
      id: 2,
      title: "groceries",
      date: new Date(),
      price: 200,
    },
    {
      id: 3,
      title: "phone bill",
      date: new Date(),
      price: 50,
    }
  ]
  return (
    <div>
      {expenses.map(ex => <ExpenseItem title={ex.title} date={ex.date} key={ex.id} />)}
    </div>
  );
}

export default App;
