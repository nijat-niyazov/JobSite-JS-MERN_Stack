import React, { useState } from 'react';
import { Logo, FormRow, Alert } from '../../components/exporter';
import Wrapper from './regStyle';

const unUser = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
};

export default function Register() {
  const [user, setUser] = useState(unUser);

  const toggleMember = () => {
    setUser({ ...user, isMember: !user.isMember });
  };

  const changeHandler = e => {
    setUser(e.target);
    console.log(e.target);
  };

  const submitHandle = e => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={submitHandle}>
        <Logo />
        <h3>{user.isMember ? 'Login' : 'Register'}</h3>
        {user.showAlert && <Alert />}
        <FormRow name="name" value={user.name} changeHandler={changeHandler} />
        <FormRow
          name="email"
          value={user.email}
          changeHandler={changeHandler}
        />
        <FormRow
          name="password"
          value={user.password}
          changeHandler={changeHandler}
        />
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
