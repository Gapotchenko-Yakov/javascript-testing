import React, { useState } from "react";
import User from "./User";

const UsersForTest = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
        setIsLoading(false);
      }, 1000);
  }, []);

  return (
    <div data-testid="users-page">
      {isLoading && <h1 id="users-loading">Loading...</h1>}
      {users.length && (
        <div id="users-list">
          {users.map((user) => (
            <User key={user.id} onDelete={onDelete} user={user}>
              {user.name}
            </User>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersForTest;
