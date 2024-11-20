import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { User } from "../../app/auth/domain/entity/User";


interface UserContextType {
  user: User | null;
  loading: boolean;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserState(JSON.parse(storedUser));
    }
    setLoading(false); // Set loading to false after initialization
  }, []);

  const setUser = (user: User) => {
    setUserState(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const clearUser = () => {
    setUserState(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, loading, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
