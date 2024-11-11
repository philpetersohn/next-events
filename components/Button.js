"use client";

import { useState } from "react";
import { getUser } from "@/lib/actions/action";

export default function Button() {
  const [users, setUsers] = useState([]);

  async function fetchUser() {
    const users = await getUser();
    setUsers(users);
  }

  return (
    <>
      <button className="btn btn-primary" onClick={fetchUser}>
        GetUsers
      </button>
      <ul className="bg-blue-300">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
