import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { setIncomeAction } from "store/expense/expense-slice";

export function IncomeInput(props) {
  const dispatch = useDispatch();
  const initIncome = useSelector((state) => state.EXPENSE.income);

  const handleIncome = (e) => {
    dispatch(setIncomeAction({ income: Number.parseFloat(e.target.value) }));
  };

  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
          value={initIncome}
          onChange={handleIncome}
        />
      </div>
    </div>
  );
}
