import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props){
    const [filteredValue, setFilteredValue]=useState('2020');
    
    const filterYear=(selectedYear)=>{
        setFilteredValue(selectedYear);
    }
    const filteredExpense=props.items.filter((expense)=>{
        return expense.date.getFullYear().toString()===filteredValue;
    });
    
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredValue} onChangeFilter={filterYear}/> 
            <ExpenseChart expenses={filteredExpense}/>
            <ExpensesList items={filteredExpense}/>   
        </Card>
    )
}

export default Expenses;