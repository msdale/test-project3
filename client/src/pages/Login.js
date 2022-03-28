import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import LoginImage from '../assets/login/login.webp';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main id='login-page' >
      <div className='section is-large'>
        <div className="columns is-mobile is-vcentered">

          <div className="column is-half">
            <figure className="image is-4x3 is-inline-block">
              <img src={LoginImage} alt="cleaning the kitchen"/>
            </figure>
          </div>

          <div id='login-form' className='column is-half'>
            <div className='title is-1'>Welcome Back!</div>

            <form onSubmit={handleFormSubmit}>
              <div className='field'>
                <p className='control'>
                  <input
                    className="input"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                />
                </p>
              </div>
              <div className='field'>
                <p className='control'>
                  <input
                    className="input"
                    placeholder="******"
                    name="password"
                    type="password"
                    id="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div className='field'>
                <p className='control'>
                  <button className="button is-info" type="submit">
                    Login
                  </button>
                </p>
                <a href="/signup" className="has-text-link is-underlined">No account? Sign up today!</a>
              </div>
          </form>
            {error && <div>Login failed</div>}   
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
