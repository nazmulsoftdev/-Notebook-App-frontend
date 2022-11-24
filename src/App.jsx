import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/Login";
import SingupForm from "./components/Singup";
import UserLayout from "./layout/UserLayout";

import AdminLayout from "./layout/AdminLayout";
function App() {
  return (
    <>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<LoginForm />} />
          <Route path="singup" element={<SingupForm />} />
        </Route>
        <Route path="dashboard/*" element={<AdminLayout />} />
      </Routes>
    </>
  );
}

export default App;
