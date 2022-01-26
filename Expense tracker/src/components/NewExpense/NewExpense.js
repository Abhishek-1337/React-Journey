import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense =(props)=>{

  const saveExpenseHandler=(enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id:Math.random().toString()
    };

    props.onGettingData(expenseData);
  };

  return (
    <div className="new-expense">
        <ExpenseForm onSaveExpense={saveExpenseHandler}/>
    </div>  
  );
};

export default NewExpense;