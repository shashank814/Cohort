import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([])
  

  return (
    <div className="p-3 min-h-screen bg-gray-800 flex flex-col gap-4">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex gap-4">
          {users.map((elem, key) => {
            return <UserCard users={elem} setToggle={setToggle}/>
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-150">
          <Form setUsers={setUsers} setToggle={setToggle}/>
        </div>
      )}
    </div>
  );
};

export default App;
