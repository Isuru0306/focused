import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "store/expense/expense-slice";
import s from "./style.module.css";

export function ExpenseInput(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  function submit(e) {
    e.preventDefault();
    dispatch(addExpense({ name, price: Number.parseFloat(price) }));
  }

  return (
    <form onSubmit={submit}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder='Ex : "Apple"'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Ex: 3.99"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button type="submit" className={`btn btn-primary ${s.btn}`}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
