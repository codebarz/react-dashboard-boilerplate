import React, { useState, useContext } from 'react';
import axios from 'axios';
import alert from 'izitoast';
import { Redirect } from 'react-router-dom';

//Components
import Card from '../../components/Card';

//Stylings
import './Login.css';
import Button from '../../components/Button';

import { UserContext } from '../../Context';

function Login() {
  const [values, setValues] = useState({ email: '', password: '' });
  const [redirect, setRedirect] = useState(false);
  const { user, setUser } = useContext(UserContext);

  function inputChangeHandler(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  function loginFormHandler(e) {
    e.preventDefault();
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BASE_URL}/api/admin/login`,
      data: values,
    })
      .then(response => {
        if (response.data.status === 200) {
          setUser({ data: response.data.payload, token: response.data.token });
          alert.success({
            titleColor: 'white',
            message: 'Login Successfully',
            backgroundColor: '#0dc6b5',
            messageColor: 'white',
            position: 'center',
            timeout: 5000,
          });
          setRedirect(true);
          return;
        }
        alert.error({
          titleColor: 'white',
          message: 'Email or Password incorrect',
          backgroundColor: '#fe3e32',
          messageColor: 'white',
          position: 'center',
          timeout: 5000,
        });
      })
      .catch(() => {
        alert.error({
          titleColor: 'white',
          message: 'Email or Password incorrect',
          backgroundColor: '#fe3e32',
          messageColor: 'white',
          position: 'center',
          timeout: 5000,
        });
      });
  }

  if (redirect) {
    return <Redirect to="/dashboard" />;
  }

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
      <form className="formFields" onSubmit={loginFormHandler}>
        <h3>Admin Login</h3>
        <input
          type="text"
          name="email"
          placeholder="Email"
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
