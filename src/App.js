import { Expenses } from "./components/expenses/Expenses";
import { NewExpense } from "./components/expenses/NewExpense";

function App() {
  const expenses = [
    {
      id: 1,
      title: "insurance",
      date: new Date(),
      amount: 100,
    },
    {
      id: 2,
      title: "groceries",
      date: new Date(),
      amount: 200,
    },
    {
      id: 3,
      title: "phone bill",
      date: new Date(),
      amount: 50,
    }
  ]

  // const [expenses, setExpenses] = useState(initExpenses);

  return (
    <div>
      <h2>Expenses</h2>
      <Expenses items={expenses} />
      <NewExpense />
    </div>
  )
}

export default App;
