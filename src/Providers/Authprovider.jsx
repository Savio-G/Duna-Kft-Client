import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../../firebase.config';
import { getRole } from '../api/auth';
export const AuthContext = createContext(null)


const auth = getAuth(app);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [approvalStatus, setApprovalStatus] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if (user) {
      getRole(user?.email)
        .then(user => {
          setApprovalStatus(user.approvalStatus)
          setIsAdmin(user.isAdmin)
        })
    }
  }, [user])


  // useEffect(() => {
  //   if (user) {
  //     getRole(user?.email)
  //       .then(user => {
  //         setApprovalStatus(user.approvalStatus)
  //       })
  //   }
  // }, [user])

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }


  const existingUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  // const updateName = (user, name) => {
  //   setLoading(true)
  //   return updateProfile(auth.user, {
  //     displayName: name
  //   })
  // }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentuser => {
      setUser(currentuser)
      console.log('currentuser', currentuser)
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    existingUser,
    logOut,
    approvalStatus,
    setApprovalStatus,
    isAdmin,
    setIsAdmin
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;