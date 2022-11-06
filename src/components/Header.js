import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to='/' style={{ margin: "5px" }}>
        Home
      </Link>

      <Link to='/adduser' style={{ margin: "5px" }}>
        Add User
      </Link>
    </nav>
  );
};

export default Header;
