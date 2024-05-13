import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
  const expenseList = useSelector((state) => state.EXPENSE.expenses);
  const income = useSelector((state) => state.EXPENSE.income);

  const totalExpenses = expenseList.reduce((acc, expense) => {
    return acc + expense.price;
  }, 0);


  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>$ {totalExpenses}</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>$ {income - totalExpenses}</div>
      </div>
    </div>
  );
}
