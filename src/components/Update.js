import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";

const Update = () => {
  const storedUser = useLoaderData();
  const [user, setUser] = useState(storedUser);

  // submit handel
  const handelUpdateUser = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  // onChange handel
  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div>
      <Header></Header>
      <h2>Update {storedUser?.name}'s Profile</h2>
      <form onSubmit={handelUpdateUser}>
        <input
          onChange={handleInputChange}
          type='text'
          name='name'
          placeholder='Name'
          defaultValue={storedUser.name}
          required
        />
        <br />
        <input
          onChange={handleInputChange}
          type='email'
          name='email'
          placeholder='E-mail'
          defaultValue={storedUser.email}
          required
        />
        <br />
        <input
          onChange={handleInputChange}
          type='text'
          name='address'
          placeholder='Address'
          defaultValue={storedUser.address}
          required
        />
        <br />
        <input type='submit' value='Add User' />
      </form>
    </div>
  );
};

export default Update;
