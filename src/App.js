import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App() {
  const [usersList, setUsersList] = useState([
    {
      id: "a1",
      name: "venkat",
      age: 22,
    },
    {
      id: "a2",
      name: "robert",
      age: 32,
    },
  ]);

  const addUserHandler = (newUser) => {
    setUsersList((prevState) => {
      const updatedUsers = [...prevState];
      updatedUsers.unshift({
        name: newUser.name,
        age: newUser.age,
        id: Math.random().toString(),
      });
      return updatedUsers;
    });
  };

  return (
    <>
      <AddUser addUser={addUserHandler} />
      <UserList users={usersList} />
    </>
  );
}

export default App;
