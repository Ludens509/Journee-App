
import { createContext, useState } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  // default post to an empty array to avoid null/length errors in consumers
  const [post, setPost] = useState([]);

  const value = {
    user,
    setUser,

    post,
    setPost,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
// export function useUser() { 
//   return useContext(UserContext);
// }
export { UserContext };