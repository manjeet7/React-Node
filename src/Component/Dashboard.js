import React, { useState } from "react";

const Dashboard = ({ Email, Password }) => {
  return (
    <div>
      <h1>Welcome : {Email}</h1>
      <h2>{Password}</h2>
    </div>
  );
};

export default Dashboard;
