import React, { useState } from 'react';

//Components
import Card from '../../components/Card';

//Stylings
import './Login.css';
import Button from '../../components/Button';

function Login() {
  const [values, setValues] = useState({ username: '', password: '' });

  function inputChangeHandler(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  function loginFormHandler() {}

  const style = {
    boxShadow: '0 0 14px rgba(0,0,0,.1)',
    width: '90%',
    margin: '100px auto',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <Card styles={style} additionalClass="loginCard">
      <form className="formFields">
        <h3>Admin Login</h3>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={inputChangeHandler}
          value={values.username}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={inputChangeHandler}
          value={values.password}
        />
        <Button clickHandler={loginFormHandler} text="Login" />
      </form>
    </Card>
  );
}

export default Login;
