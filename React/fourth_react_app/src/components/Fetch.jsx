import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchUsers from "../middleware/userAction";

const Fetch = () => {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector((state) => ({
    users: state.users,
    loading: state.loading,
    error: state.error,
  }));

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFetch = () => {
    dispatch(fetchUsers());
  };

  return (
    <div>
      <button onClick={handleFetch}>User List from API</button>

      {loading && <h2>Loading users...</h2>}
      {error && <h2 style={{ color: "red" }}>Error: {error}</h2>}

      {!loading && !error && users.length > 0 && (
        <>
          <h1>User List</h1>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong> — {user.email}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Fetch;
