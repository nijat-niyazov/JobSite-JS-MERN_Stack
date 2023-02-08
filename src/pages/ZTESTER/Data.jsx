import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';

const Data = () => {
  const dogImage = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === 'loading') {
    return <h1>That is loading</h1>;
  }

  console.log(dogImage);

  return (
    <div>
      <img
        src="https://random.dog/15cde4c5-5208-4e31-aa11-cc4853893392.jpg"
        alt="dogImage"
      />
      <h2>Okay</h2>
    </div>
  );
};

export default Data;
