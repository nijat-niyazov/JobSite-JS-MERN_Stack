import React, { useEffect, useState } from 'react';
import Wrapper from './regStyle';
import { Logo, FormRow, Alert } from '../../components/exporter';

import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import {
  displayAlert,
  hideAlert,
  registerUser,
} from '../../utils/redux/reducers/allStates';
import { useNavigate } from 'react-router-dom';

const unUser = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState(unUser);
  const dispatch = useDispatch();

  const { allStates } = useSelector(state => state.all);

  useEffect(() => {
    console.log(allStates);
    console.log(allStates.user);
  }, [allStates]);

  useEffect(() => {
    if (allStates.user !== null) {
      console.log('it will work');
      setTimeout(() => navigate('/'), 3000);
    }
  }, [allStates.user, navigate]);

  const toggleMember = () => {
    setUser({ ...user, isMember: !user.isMember });
  };

  const changeHandler = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const alertDisplayer = () => {
    dispatch(
      displayAlert({
        text: 'Please provide all values',
        type: 'danger',
      })
    );
  };

  const alertHider = () => {
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };

  const addToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    localStorage.setItem('location', location);
  };

  const removeFromLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('location');
  };

  const submitHandle = e => {
    e.preventDefault();
    const { name, email, password, isMember } = user;
    if (!email || !password || (!isMember && !name)) {
      console.log('triggered');
      alertDisplayer();
      alertHider();
      return;
    } else {
      const currentUser = { name, email, password };
      if (isMember) {
        console.log('already a member');
      } else {
        registerUserFunc(currentUser);
      }
    }

    console.log(user);
  };

  const registerUserFunc = async currentUser => {
    try {
      const response = await axios.post('/api/v1/auth/register', currentUser);
      console.log(response.data);
      const { user, token, location } = response.data;

      console.log(response.data);

      dispatch(
        displayAlert({
          text: 'User is created! Redirecting to Home Page...',
          type: 'success',
        })
      );

      dispatch(
        registerUser({
          user: user,
          token: token,
          userLocation: location,
          jobLocation: location,
        })
      );
      addToLocalStorage({ user, token, location });
    } catch (err) {
      dispatch(
        displayAlert({
          showAlert: true,
          text: err.response.data.msg,
          type: 'danger',
        })
      );

      alertHider();
    }
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={submitHandle}>
        <Logo />
        <h3>{user.isMember ? 'Login' : 'Register'}</h3>
        {allStates?.showAlert && <Alert />}
        <div>
          {!user.isMember ? (
            <FormRow
              type="text"
              name="name"
              value={user.name}
              changeHandler={changeHandler}
            />
          ) : null}
          <FormRow
            type="email"
            name="email"
            value={user.email}
            changeHandler={changeHandler}
          />
          <FormRow
            type="password"
            name="password"
            value={user.password}
            changeHandler={changeHandler}
          />
        </div>
        <button
          type="submit"
          className="btn btn-block"
          disabled={allStates.isLoading}
        >
          Submit
        </button>
        <p>
          {user.isMember ? 'Not registered yet ' : 'Already a member ?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {user.isMember ? 'Register ' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
