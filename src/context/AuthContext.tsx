import { auth } from '@/config/firebase';
import { createContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
export const AuthContext = createContext(null);
function AuthContextProvider({ children }) {
  const [user] = useAuthState(auth);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
