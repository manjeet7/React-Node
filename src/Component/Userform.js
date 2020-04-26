import React, { Component } from "react";
import Formuserdetails from "./Formuserdetail";
import Formpersonaldetail from "./Formpersonaldetail";
import Confirm from "./Confirm";
import Succes from "./Sucess";

export class Userform extends Component {
  state = {
    step: 1,
    FirstName: "",
    LastName: "",
    Password: "",
    Email: "",
    Occuptaion: "",
    City: "",
    Bio: ""
  };

  // proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  //back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //hanle field change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      FirstName,
      LastName,
      Email,
      Occuptaion,
      Password,
      Bio,
      City
    } = this.state;
    const values = {
      FirstName,
      LastName,
      Email,
      Occuptaion,
      Password,
      City,
      Bio
    };

    switch (step) {
      case 1:
        return (
          <Formuserdetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Formpersonaldetail
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Succes />;
    }
  }
}

export default Userform;
