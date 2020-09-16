import React, { useEffect, useState } from "react";

const Users = ({ id }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <div>
        <h2>Users</h2>
      <p>
        <strong> Name: </strong>
        {user && user.name}
      </p>
    </div>
  );
};

export default Users;
