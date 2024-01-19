import { useState, useEffect } from "react";
import { userRequest } from "../../../requestMethods";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    try {
      const response = await userRequest.get("/users/all");
      // console.log(response);
      const { users, success, message } = response.data;
      console.log(users, success, message);
      setUsers(users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      UserManagement
      {users.map((user) => (
        <div key={user._id}>
          <div>{user.name}</div>
          <div>{user.email}</div>
          <div>{user.isAdmin}</div>
        </div>
      ))}
    </div>
  );
}

export default UserManagement;
