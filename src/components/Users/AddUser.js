import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please entere a valid name and age (non-empty values).',
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please entere a valid age (> 0).',
      });
      return;
    }
    console.log(enteredAge, enteredUserName);

    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName('');
    setEnteredAge('');
  };

  const usernameHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  const userAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          errMsg={error.message}
          onConfirm={errorHandler}
        />
      )}
      {!error && (
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
      )}
    </div>
  );
};

export default AddUser;
