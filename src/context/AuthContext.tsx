import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  userid: string | null;
  nickname: string | null;
  login: (userid: string, nickname: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userid, setUsername] = useState<string | null>(null);
  const [nickname, setNickname] = useState<string | null>(null);

  useEffect(() => {
    setUsername(localStorage.getItem("userid"));
    setNickname(localStorage.getItem("nickname"));
  }, []);

  const login = (userid: string, nickname: string) => {
    localStorage.setItem("userid", userid);
    localStorage.setItem("nickname", nickname);
    setUsername(userid);
    setNickname(nickname);
  };

  const logout = () => {
    localStorage.removeItem("userid");
    localStorage.removeItem("nickname");
    setUsername(null);
    setNickname(null);
  };

  return (
    <AuthContext.Provider value={{ userid, nickname, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
