import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdOutlineLibraryBooks as BookIcon } from "react-icons/md";
import { HiOutlineDocumentAdd as AddIcon } from "react-icons/hi";
import { FcSettings as SettingIcon } from "react-icons/fc";
import { BiLogOutCircle as LogoutIcon } from "react-icons/bi";
import { AiOutlineMenu as NavToggleIcon } from "react-icons/ai";
import "./Nav.css";
import { ContextAPi } from "../../../context";

function Nav() {
  const { adminScreen, HandleScreen, Logout } = useContext(ContextAPi);

  return (
    <div
      className="Nav-container"
      style={adminScreen ? { width: "15%" } : { width: "10%" }}
    >
      <NavToggleIcon
        className="NavToggle-Icon"
        onClick={HandleScreen}
        size={adminScreen ? 30 : 20}
      />
      <div className="Nav-content">
        <Link to="/dashboard/allBook">
          <BookIcon size={25} color="#222f3e" />
          {adminScreen ? <span className="nav-item">Book</span> : ""}
        </Link>
        <Link to="/dashboard/addBook">
          <AddIcon size={25} color="#222f3e" />
          {adminScreen ? <span className="nav-item">Add</span> : ""}
        </Link>
        <Link to="/dashboard/setting">
          <SettingIcon size={25} color="#222f3e" />
          {adminScreen ? <span className="nav-item">Setting</span> : ""}
        </Link>

        <Link onClick={Logout}>
          <LogoutIcon size={25} color="#222f3e" />
          {adminScreen ? <span className="nav-item">Logout</span> : ""}
        </Link>
      </div>
    </div>
  );
}

export default Nav;
