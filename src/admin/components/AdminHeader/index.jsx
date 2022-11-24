import React from "react";
import "./AdminHeader.css";

function AdminHeader({ searchInput, HandleSearchInput }) {
  return (
    <div className="Admin-header">
      <div className="Admin-header-content">
        <input
          type="text"
          placeholder="Search Here"
          value={searchInput}
          onChange={HandleSearchInput}
        />
      </div>
    </div>
  );
}

export default AdminHeader;
