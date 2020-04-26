import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Logincontext } from "./Component/Logincontext";

function Header() {
  const [user, setuser] = useContext(Logincontext);
  const activeStyle = { color: "violet" };
  if (user.Email === "") {
    return (
      <nav>
        <NavLink activeStyle={activeStyle} exact to="/">
          Home
        </NavLink>
        <NavLink activeStyle={activeStyle} to="Login">
          Login
        </NavLink>
        {" | "}
        <NavLink activeStyle={activeStyle} to="Dashboard">
          Dashboard
        </NavLink>
      </nav>
    );
  } else {
    return (
      <nav>
        <NavLink activeStyle={activeStyle} exact to="/">
          Home
        </NavLink>
        {" | "}
        <NavLink activeStyle={activeStyle} to="/Signup">
          Signup
        </NavLink>
        {" | "}
        <NavLink activeStyle={activeStyle} to="Login">
          Login
        </NavLink>
        {" | "}
        <NavLink activeStyle={activeStyle} to="Dashboard">
          Dashboard
        </NavLink>
      </nav>
    );
  }
}
export default Header;
