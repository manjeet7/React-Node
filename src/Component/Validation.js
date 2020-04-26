import React, { Component, useContext } from "react";
import { Login } from "./Login";
import { toast } from "react-toastify";
import { Detailprovider, Logincontext } from "./Logincontext";
import Dashboard from "./Dashboard";

const Validation = () => {
  const [user, setuser] = useContext(Logincontext);
  return (
    <div>
      {user.map(values => (
        <Dashboard
          Email={values.Email}
          Password={values.Password}
          key={values.Id}
        />
      ))}
    </div>
  );
};

export default Validation;
