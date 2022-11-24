import React, { useContext } from "react";
import { ContextAPi } from "../context";
import { Navigate, Outlet } from "react-router-dom";
import Nav from "../admin/components/Nav";

function ProtectedRoute() {
  const { isLogin, adminScreen } = useContext(ContextAPi);

  if (isLogin === false) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <Nav />
      <div
        style={
          adminScreen
            ? {
                width: "85%",
                height: "100%",
                marginLeft: "15%",
                position: "absolute",
              }
            : {
                width: "90%",
                height: "100%",
                marginLeft: "10%",
                position: "absolute",
              }
        }
      >
        <Outlet />
      </div>
    </>
  );
}

export default ProtectedRoute;
