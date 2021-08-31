import React from "react";

const Users = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="text-center align-items-center">
      Welcome <h3>{user.email}</h3>
    </div>
  );
};

export default Users;
