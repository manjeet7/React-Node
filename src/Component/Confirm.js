import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class Formuserdetail extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  Back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { FirstName, LastName, Email, Occupation, City, Bio }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm the User Details" />
          <List>
            <ListItem primaryText="First Name" secondaryText={FirstName} />
            <ListItem primaryText="Last Name" secondaryText={LastName} />
            <ListItem primaryText="Email" secondaryText={Email} />
            <ListItem primaryText="Occupation" secondaryText={Occupation} />
            <ListItem primaryText="City" secondaryText={City} />
            <ListItem primaryText="Bio" secondaryText={Bio} />
          </List>
          <br></br>
          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />

          <RaisedButton
            label="Back"
            primary={true}
            style={styles.button}
            onClick={this.Back}
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
