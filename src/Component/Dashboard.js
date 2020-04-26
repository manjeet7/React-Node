import React, { useState } from "react";

const Dashboard = ({ Email, Password, ids }) => {
  if (ids === "true") {
    return (
      <div>
        <h1>Welcome : {Email}</h1>
        <h2>{Password}</h2>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Dashboard;
