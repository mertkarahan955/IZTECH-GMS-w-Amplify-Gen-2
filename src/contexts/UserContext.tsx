import React, { createContext, useContext, useState, ReactNode } from "react";
import { User } from "../interfaces/User";
import { fetchUser } from "../api/auth";


interface UserContextType {
  user: User | null; // The current user
  setUser: React.Dispatch<React.SetStateAction<User | null>>; // To update the user
  fetchAndSetUser: () => Promise<void>; // Function to fetch and update user
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Fetch user attributes and update the state
  const fetchAndSetUser = async () => {
    try {
      const userData = await fetchUser();
      setUser(userData);
    } catch (error) {
      console.error("Failed to fetch and set user:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, fetchAndSetUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the User Context
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
