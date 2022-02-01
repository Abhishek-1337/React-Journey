import React,{useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
    let listObj = {};
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');
    const addUserHandler = event => {
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
            setError({
                title:'Invalid input',
                message:'Please enter valid name and age(non-empty values)'
            })
            return;
        }
        if(+enteredAge < 1){//Implicit coercion to make it explicit use "+" infront of variable
            setError({
                title:'Invalid age',
                message:'Please enter valid age(>0)'
            })
            return;
        }
        listObj= {name:enteredUsername, age:enteredAge, id:Math.random().toString()};
        props.onAddUser(listObj);
        setEnteredUsername('');
        setEnteredAge('');
       
    }

    const onClickHandler = () => {
        setError('');
    }

    const usernameHandler = event => {
        setEnteredUsername(event.target.value);
    }
    const ageHandler = event => {
        setEnteredAge(event.target.value);
    }

    return (
        <div>
        {error && <ErrorModal 
        title={error.title} 
        message={error.message} 
        onConfirm={onClickHandler}>
        </ErrorModal>}

        <Card cssClass={styles.container}>
        <form onSubmit={addUserHandler} >
            <label htmlFor="username">Username</label>
            <input type="text" id="username" 
            onChange={usernameHandler} 
            value={enteredUsername}/>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" 
            onChange={ageHandler} 
            value={enteredAge}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
    );
}

export default AddUser;