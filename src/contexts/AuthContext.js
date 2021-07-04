import { useState, useEffect, createContext } from "react";
import { projectAuthentication } from "../Firebase/config";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return projectAuthentication.createUserWithEmailAndPassword(
      email,
      password
    );
  };

  const signin = (email, password) => {
    return projectAuthentication.signInWithEmailAndPassword(email, password);
  };

  const signout = () => {
    return projectAuthentication.signOut();
  };

  useEffect(() => {
    const unsub = projectAuthentication.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsub;
  }, []);

  const value = {
    currentUser,
    signup,
    signin,
    signout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
};

// export default AuthContextProvider;
