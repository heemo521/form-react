import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (e) => {
    e.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0)
      return;

    if (+enteredAge < 1) return;
    console.log(enteredAge, enteredUserName);

    setEnteredUserName('');
    setEnteredAge('');
  };

  const usernameHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  const userAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          value={enteredUserName}
          onChange={usernameHandler}
        ></input>

        <label htmlFor='age'>Age (Years)</label>
        <input
          type='number'
          id='age'
          onChange={userAgeHandler}
          value={enteredAge}
        ></input>

        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
