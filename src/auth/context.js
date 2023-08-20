import { createContext } from "react";

export const AuthContext = createContext({
  // context 객체를 생성하고 관리할 state들의 타입을 정한다.
  login: () => {},
  logout: () => {},
});

export const AuthStateContext = createContext();
