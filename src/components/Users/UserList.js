import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

function UserList(props) {
  const users = props.users;

  const temp = users.map((user) => {
    return (
      <li key={user.id} className="user">
        {user.name} ({user.age} years old)
      </li>
    );
  });

  return (
    <Card className={classes.users}>
    
      <ul>{temp}</ul>
    </Card>
  );
}

export default UserList;
