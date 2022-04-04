import styles from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username'></input>

        <label htmlFor='age'>Age (Years)</label>
        <input type='number' id='age'></input>

        <button type='submit'>Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
