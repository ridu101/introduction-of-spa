import { use } from "react";
import User2card from "../User2Card/User2card";

const User2 = ({ userPromise2 }) => {
  const users = use(userPromise2);

  return (
    <div>
      <h1>This is User2</h1>

      <div>
        {users.map((user) => (
          <User2card
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </div>
  );
};

export default User2;