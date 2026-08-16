import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {

  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || []
  })

  const [updatedData, setUpdatedData] = useState(null)

  const deleteUser = (id) => {
    let filterUser = users.filter((val, index) => {
      return index !== id
    })
    setUsers(filterUser)
    localStorage.setItem("users", JSON.stringify(filterUser))
  }

  console.log(users);

  return (
    <div className="p-3 min-h-screen bg-gray-800 flex flex-col gap-4">
      <Navbar setToggle={setToggle} />

      {toggle ? ( 
        <div className="flex gap-4 flex-wrap">
          {users.map((elem) => {
            return <UserCard key={elem.id}  deleteUser={deleteUser} users={elem} setToggle={setToggle} setUpdatedData={setUpdatedData}/>
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-150">
          <Form users={users} setUsers={setUsers} setToggle={setToggle} updatedData={updatedData}/>
        </div>
      )}
    </div>
  );
};

export default App;
