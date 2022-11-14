import React, { createContext, useContext, useEffect, useState } from 'react'

const Global=createContext();
const Context = ({children}) => {
  const [users,setUsers]=useState(null);
  const [login,setLogin]=useState(null);
  useEffect(()=>{
    console.log(users);
  },[users])
  const addUser=(newUser)=>{
    if(users===null)
    {
      setUsers([newUser]);
    }
    else{
      setUsers(curr=> [...curr,newUser])
    }
  }
  console.log(login);
  const SignUp=(newUser)=>{
    setLogin(newUser);
  }
  const Logout=()=>{
    setUsers(null);
  }
  return (
    <Global.Provider value={{
      login,
      users,
      addUser,
      setLogin,
      SignUp,
      Logout,
      setUsers,
    }}>
      {children}
    </Global.Provider>
  )
}
export default Context
export const GlobalContext=()=>{
  return useContext(Global);
}