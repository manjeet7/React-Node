import React, { useState, createContext } from "react";

export const Logincontext = createContext();

export const Detailprovider = props => {
  const [user, setuser] = useState([
    {
      Email: "",
      Password: "",
      Id: true
    }
  ]);
  return (
    <Logincontext.Provider value={[user, setuser]}>
      {props.children}
    </Logincontext.Provider>
  );
};
