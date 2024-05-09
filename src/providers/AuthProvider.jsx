import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  // console.log(user);
  const [loading, setLoading] = useState(true);

  //create user
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //logout user
  const logOutUser = async () => {
    setLoading(true);
    const { data } = axios(`${import.meta.env.VITE_API_URL}/logout`, {
      withCredentials: true,
    });
    console.log(data);
    return signOut(auth);
  };
  //update profile
  const updateProfileInfo = (userName, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: photo,
    });
  };
  //login with google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //user observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
      setLoading(false);
      setUser(CurrentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);
  const a = { name: "omuk" };
  const authInfo = {
    registerUser,
    loginUser,
    user,
    logOutUser,
    updateProfileInfo,
    googleLogin,
    loading,
    setLoading,
    setUser,
    a,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
