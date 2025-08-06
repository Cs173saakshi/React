import { useState } from "react";

function SecondUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong...");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>User List</h1>
      <button onClick={fetchData}>Fetch User List</button>
      {loading && <p>Loading User Details... Please wait...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SecondUserList;
