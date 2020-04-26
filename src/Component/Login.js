import React, { useState, useContext } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { Logincontext } from "./Logincontext";

export const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [user, setuser] = useContext(Logincontext);

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePass = e => {
    setPassword(e.target.value);
  };

  const AddDetail = e => {
    e.preventDefault();
    setuser(prevmovies => [
      ...prevmovies,
      { Email: Email, Password: Password, ids: "true" }
    ]);
  };
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Enter the User Details" />
        <form onSubmit={AddDetail}>
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleEmail}
          />
          <br></br>
          <TextField
            hintText="Enter Your Password"
            floatingLabelText="Password"
            onChange={handlePass}
          />
          <br></br>
          <RaisedButton
            label="continue"
            type="submit"
            primary={true}
            style={styles.button}
          />
        </form>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

const styles = {
  button: {
    margin: 15
  }
};
export default Login;
