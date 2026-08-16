import React from "react";

const UserCard = ({users, setToggle}) => {

  return (
    <div className="p-4 border-1 border-white rounded flex flex-col gap-2 bg-gray-950 text-white">
      <div className="h-40 w-40">
        <img
          src={users.image}
          className="h-full w-full object-cover rounded"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1>{users.name}</h1>
        <p className="text-sm">{users.email}</p>
        <p className="text-sm">{users.contact}</p>
      </div>

      <div className="flex justify-between w-full gap-4">
        <button className="bg-yellow-700 text-white py-1 px-2 rounded" onClick={() => setToggle((prev) => !prev)}>Update</button>
        <button className="bg-red-700 text-white py-1 px-2 rounded">Delete</button>
      </div>
    </div>
  );
};

export default UserCard;
