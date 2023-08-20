import { useContext } from "react";
import { AuthContext } from "./context";

function useAuth() {
  const { login, logout } = useContext(AuthContext); // useContext 이용한 로그인 상태 관리

  const signIn = (token) => {
    login(token);
  };
  const signOut = () => {
    logout();
  };

  return {
    signIn,
    signOut,
  };
}

export default useAuth;
