import React from "react";
import { useState } from "react";
import Header from "./Header";

const AddUser = () => {
  const [user, setUser] = useState({});

  // submit handel
  const handelAddUser = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("User added successfully");
          event.target.reset();
        }
      });
  };

  // onblur handel
  const handleInputBluer = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div>
      <Header></Header>
      <h2>Please add an user</h2>

      <form onSubmit={handelAddUser}>
        <input
          onBlur={handleInputBluer}
          type='text'
          name='name'
          placeholder='Name'
          required
        />
        <br />
        <input
          onBlur={handleInputBluer}
          type='email'
          name='email'
          placeholder='E-mail'
          required
        />
        <br />
        <input
          onBlur={handleInputBluer}
          type='text'
          name='address'
          placeholder='Address'
          required
        />
        <br />
        <input type='submit' value='Add User' />
      </form>
    </div>
  );
};

export default AddUser;
