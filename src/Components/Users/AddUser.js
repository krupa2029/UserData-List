import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css';

const AddUser = props => {

    const [enteredUserName, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if(+enteredAge< 1){
            return;
        }
            console.log(enteredUserName, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <Card cssClass={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">UserName</label>
                <input id="username" type="text" value={enteredUserName} onChange={usernameChangeHandler}></input>

                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>

                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;