import Button from "@/components/Button";
import { getUser } from "@/lib/actions/action";

export default async function Home() {
  const users = await getUser();
  return (
    <button className="m-2">
      <Button />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </button>
  );
}
