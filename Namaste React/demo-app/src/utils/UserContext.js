import { createContext } from "react";

let userContext = createContext({
  userName: "Default User",
});

export default userContext;
