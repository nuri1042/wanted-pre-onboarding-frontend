import { useContext } from "react";
import { AuthContext } from "./context";

function useAuth() {
  const { login, logout } = useContext(AuthContext); // useContext 이용한 로그인 상태 관리
  // useContext Hook은 context를 읽고 상태변화를 구독하는 것만 가능
  // context 상테를 업데이트하기 위해 Provider 사용

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
