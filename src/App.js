import React from 'react';
import AddUser from './components/Users/AddUser';
import UserDisplay from './components/Users/UserDisplay';
import './App.css';

function App() {
  return (
    <div className='App'>
      <AddUser />
      <UserDisplay />
    </div>
  );
}

export default App;
