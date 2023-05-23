import { auth, db } from '@/config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
export const AuthContext = createContext(null);
function AuthContextProvider({ children }) {
  const [user, loading, error] = useAuthState(auth);
  const [dbUser, setdbUser] = useState<any>({});
  useEffect(() => {
    (async () => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        setdbUser(docSnap.data());
      }
    })();
  }, [user]);
  return (
    <AuthContext.Provider value={{ ...dbUser, loading, user }}>{children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
