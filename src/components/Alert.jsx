import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Alert = () => {
  const { allStates } = useSelector(state => state.all);

  useEffect(() => {
    console.log(allStates);
  }, [allStates]);

  return (
    <div className={`alert alert-${allStates.type}`}>{allStates.text}</div>
  );
};

export default Alert;
