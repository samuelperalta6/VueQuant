import React, { useEffect } from 'react';
import api from "../../axiosConfig.js";

const Dashboard = () => {
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get('/user');
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return <div>Dashboard Content</div>;
};

export default Dashboard;
