import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-5 hover:shadow-xl transition">
      
      {/* Avatar */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
          {user.name.firstname[0].toUpperCase()}
          {user.name.lastname[0].toUpperCase()}
        </div>

        <div>
          <h2 className="text-lg font-semibold capitalize">
            {user.name.firstname} {user.name.lastname}
          </h2>
          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-2 text-sm text-gray-700">
        <p><span className="font-medium">📧 Email:</span> {user.email}</p>
        <p><span className="font-medium">📞 Phone:</span> {user.phone}</p>
        <p>
          <span className="font-medium">📍 Address:</span>{" "}
          {user.address.number}, {user.address.street},{" "}
          {user.address.city} - {user.address.zipcode}
        </p>
      </div>

      {/* Button */}
      <button className="mt-5 w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">
        View Profile
      </button>
    </div>
  );
};

export default UserCard;