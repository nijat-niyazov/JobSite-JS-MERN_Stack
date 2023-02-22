import React, { useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const { data } = await axios.get('/api/v1');
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchdata();
  }, []);

  return <div> dashboard </div>;
};

export default Dashboard;
