import React, { useState, useRef } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css';
import Wrapper from "../Helpers/Wrapper";

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredUName = nameInputRef.current.value;
        const enteredUAge = ageInputRef.current.value;

        if (enteredUName.trim().length === 0 || enteredUAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid name and age(non-empty values).'
            });
            return;
        }
        if (+enteredUAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter valid age(> 0).'
            });
            return;
        }
        props.onAddUser(enteredUName, enteredUAge);
        nameInputRef.current.value='';
        ageInputRef.current.value='';
    };



    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>

                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input
                        id="username"
                        type="text"
                        
                        ref={nameInputRef}
                    />


                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                    />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;