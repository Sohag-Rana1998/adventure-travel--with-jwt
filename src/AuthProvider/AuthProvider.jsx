import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setLoading(true);
      const userEmail = { email: currentUser?.email } || user?.email;
      setUser(currentUser);
      if (currentUser) {
        axios
          .post("https://adventure-travel-server.vercel.app/jwt", userEmail, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data));
        // console.log("emailVerify", currentUser.emailVerified);
        // if (currentUser.emailVerified === true) {
        //   setIsVerified(true);
        // }
      } else {
        axios
          .post(
            "https://adventure-travel-server.vercel.app/logout",
            userEmail,
            {
              withCredentials: true,
            }
          )
          .then((res) => console.log(res.data));
      }
      setTimeout(setLoading, 500, false);
    });

    return () => {
      unSubscribe();
    };
  }, [auth, user]);

  console.log(isVerified);
  const handleUpdateProfile = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    }).then(() => {
      setUser({ ...user, displayName: name, photoURL: photo });
    });
  };

  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  const createUserByEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const githubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const emailVerify = async (user) => {
    await sendEmailVerification(user);
    if (isVerified) {
    }
  };

  const updateUserStatus = () => {
    user.reload();
  };

  const authInfo = {
    user,
    createUserByEmailAndPassword,
    signInWithEmail,
    signInWithGithub,
    signInWithGoogle,
    logOut,
    loading,
    handleUpdateProfile,
    emailVerify,
    isVerified,
    updateUserStatus,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
