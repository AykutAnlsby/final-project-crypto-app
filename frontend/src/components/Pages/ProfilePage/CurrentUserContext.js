import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useState } from "react";



export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();
  const [currentUser, setCurrentUser] = useState([]);
  console.log(currentUser);
  const [status, setStatus] = useState("loading");


if (!isAuthenticated) {
  console.log("not Authenticated");
  return;
}
const response = await fetch(`/api/profile?email=${user.email}`, {
  method: "GET",
  
})

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, status, setCurrentUser, setStatus }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

