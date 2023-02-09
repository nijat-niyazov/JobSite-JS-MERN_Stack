import React from 'react';
import { useSelector } from 'react-redux';

const Alert = () => {
  const { alert } = useSelector(state => state.form);

  return (
    <div className={`alert alert-${alert.alertType}`}>{alert.alertText}</div>
  );
};

export default Alert;
