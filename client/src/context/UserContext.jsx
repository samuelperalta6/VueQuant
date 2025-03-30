import { createContext, useContext, useEffect, useState } from "react";
import API from "../axiosConfig";

export const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCurrentUser = async () => {
    try {
      const response = await API.get("/api/user/", {
        withCredentials: true,
      });      
      setUser(response.data);
    } catch (error) {
      console.error("❌ Failed to get current user:", error?.response?.status, error?.response?.data);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, getCurrentUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
