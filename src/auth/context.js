import { createContext } from 'react';

export const AuthContext = createContext({
  login: () => {},
  logout: () => {},
});

export const AuthStateContext = createContext();
