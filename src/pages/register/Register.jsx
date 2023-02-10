import React, { useState } from 'react';
import Wrapper from './regStyle';
import { Logo, FormRow, Alert } from '../../components/exporter';

import { useDispatch, useSelector } from 'react-redux';
import { alertDisplayer } from '../../utils/redux/reducers/formReducer';

const unUser = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

export default function Register() {
  const [user, setUser] = useState(unUser);
  const dispatch = useDispatch();

  const { alert } = useSelector(state => state.form);

  const toggleMember = () => {
    setUser({ ...user, isMember: !user.isMember });
  };

  const changeHandler = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const displayAlert = () => {
    dispatch(
      alertDisplayer({
        showAlert: true,
        alertText: 'Wrong input',
        alertType: 'danger',
      })
    );
  };

  const hideAlert = () => {
    dispatch(
      alertDisplayer({
        showAlert: false,
        alertText: '',
        alertType: '',
      })
    );
  };

  const submitHandle = e => {
    e.preventDefault();
    const { name, email, password, isMember } = user;
    if (!email || !password || !(isMember || name)) {
      displayAlert();
      setTimeout(() => {
        hideAlert();
      }, 3000);
      return;
    } else {
    }
    console.log(user);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={submitHandle}>
        <Logo />
        <h3>{user.isMember ? 'Login' : 'Register'}</h3>
        {alert?.showAlert && <Alert />}
        <div>
          <FormRow
            type="text"
            name="name"
            value={user.name}
            changeHandler={changeHandler}
          />
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
        <button type="submit" className="btn btn-block">
          Login
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
