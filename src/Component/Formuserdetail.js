import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class Formuserdetail extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter the User Details" />
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange("FirstName")}
            defaultValue={values.FirstName}
          />
          <br></br>
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange("LastName")}
            defaultValue={values.LastName}
          />
          <br></br>
          <TextField
            hintText="Enter Your Password"
            floatingLabelText="password"
            onChange={handleChange("Password")}
            defaultValue={values.Password}
          />
          <br></br>
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange("Email")}
            defaultValue={values.Email}
          />
          <br></br>
          <RaisedButton
            label="continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};
export default Formuserdetail;
