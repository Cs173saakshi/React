export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USER_REQUEST });
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      dispatch({ type: FETCH_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
    }
  };
};

export default fetchUsers;
