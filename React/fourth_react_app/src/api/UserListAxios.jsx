import { useState, useEffect } from "react";
import axios from "axios";

const UserListAxios = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return <h1>Loading User Details... Please wait...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      <h1>User List with Axios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListAxios;
