import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  const users = useLoaderData();
  const [displayUsers, setDisplayUsers] = useState(users);
  const handelDelete = (user) => {
    const agree = window.confirm(`Are you delete ${user.name}'s Account `);
    if (agree) {
      console.log(user._id);
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount >= 0) {
            const remainingUsers = displayUsers.filter(
              (usr) => usr._id !== user._id
            );
            setDisplayUsers(remainingUsers);
          }
        });
    }
  };
  return (
    <div>
      <Header></Header>
      <h1>This is home</h1>
      <h3>Total Users : {displayUsers.length}</h3>

      {displayUsers.map((user) => (
        <p key={user._id}>
          {user.name} {" || "} {user.email}{" "}
          <button onClick={() => handelDelete(user)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Home;
