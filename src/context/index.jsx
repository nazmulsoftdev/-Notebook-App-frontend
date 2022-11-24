import React, { createContext, useState, useEffect } from "react";

export const ContextAPi = createContext();

const ContextProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false);
  const [adminScreen, setAdminScreen] = useState(true);

  useEffect(() => {}, [isLogin]);
  const HandleScreen = () => {
    setAdminScreen(!adminScreen);
  };

  // user logout
  const Logout = () => {
    const userPermission = window.confirm("Do you want to Logout ?");
    if (!userPermission) {
      return false;
    } else {
      setLogin(false);
    }
  };

  return (
    <ContextAPi.Provider
      value={{
        isLogin: isLogin,
        adminScreen: adminScreen,

        HandleScreen,
        setLogin,
        Logout,
      }}
    >
      {children}
    </ContextAPi.Provider>
  );
};

export default ContextProvider;
