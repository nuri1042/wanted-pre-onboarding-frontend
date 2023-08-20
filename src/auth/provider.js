import { useEffect, useMemo, useState } from "react";
import { AuthContext, AuthStateContext } from "./context";

const AuthProvider = ({ children }) => {
  // Provider는 실질적으로 state들을 저장하고 관리하는 공간 ( store의 역할 )
  const [user, setUser] = useState(false);

  const login = (token) => {
    localStorage.setItem("JWT", token);
    setUser(true);
  };
  const logout = () => {
    localStorage.removeItem("JWT");
    setUser(false);
  };

  const dispatch = useMemo(() => ({ login, logout }), []);

  useEffect(() => {
    if (localStorage.getItem("JWT")) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, []);

  return (
    // context객체를 가져와 value props로 위에서 정의한 state를 넘겨준다.
    <AuthStateContext.Provider value={user}>
      <AuthContext.Provider value={dispatch}>{children}</AuthContext.Provider>
    </AuthStateContext.Provider>
  );
};

export default AuthProvider;
