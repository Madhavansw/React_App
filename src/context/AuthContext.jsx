import { createContext, useContext, useState } from "react";

// STEP 1: Create Context
const AuthContext = createContext(null);

// STEP 2: Create Provider
export function AuthProvider({ children }) {

  const [user, setUser] = useState({
    name: "Madhava",
    role: "Developer",
    isLoggedIn: true
  });

  // Login function
  const login = () => {
    setUser({
      name: "Madhava",
      role: "Developer",
      isLoggedIn: true
    });
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  // STEP 3: Share values
  return (
    <AuthContext.Provider
      value={{ user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// STEP 4: Custom Hook
export function useAuth() {

  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}