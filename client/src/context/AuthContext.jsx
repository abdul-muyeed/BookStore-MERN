import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
export const useAuth = () => {
    return useContext(AuthContext);
  };



// authProvider

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };
  const signinWithGoogle = async () => {
    return await signInWithPopup(auth, googleProvider);
  }
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      if(user){
        console.log(user, "User Logged in")
        
      }else{
        console.log("User Logged out")
      }
    });
    return unsubscribe;
  }, []);
  const value = {
    currentUser,
    registerUser,
    loginUser,
    signinWithGoogle,
    logout
  };
  return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>;
};
