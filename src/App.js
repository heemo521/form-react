import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserDisplay from './components/Users/UsersList';
import './App.css';

function App() {
  const [usersList, setUsersList] = useState([]);
  const userInfoHandler = (uName, uAge) => {
    setUsersList((prevState) => [
      ...prevState,
      { id: Math.random().toString(), name: uName, age: uAge },
    ]);
  };
  return (
    <div className='App'>
      <AddUser onAddUser={userInfoHandler} />
      <UserDisplay users={usersList} />
    </div>
  );
}

export default App;
