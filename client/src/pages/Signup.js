import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import SignUpImage from '../assets/signup/signup.gif';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main id='signup-page'>
      <div className='section is-medium'>
        <div className="columns is-mobile is-vcentered">

          <div className="column is-half">
            <figure className="image is-4x3 is-inline-block">
              <img src={SignUpImage} alt="cleaning the window"/>
            </figure>
          </div>

        <div id='signup-form' className='column is-half'>
          <div className='title is-1'>Create Account</div>
        
            <form onSubmit={handleFormSubmit}>
              <div className='field'>
                <p className='control'>
                  <input
                    className="input"
                    placeholder="Enter A Username"
                    name="username"
                    type="username"
                    id="username"
                    value={formState.username}
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div className='field'>
                <p className='control'>
                  <input
                    className="input"
                    placeholder="Enter Your Email"
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
                <a href="/login" className='has-text-link is-underlined'>Already have an account?</a>
              </div>
            </form>

            {error && <div>Signup failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
