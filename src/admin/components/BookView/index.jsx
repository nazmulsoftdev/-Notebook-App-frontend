import React from "react";
import "./BookView.css";
import { useLocation } from "react-router-dom";

function BookView() {
  const location = useLocation();

  const { state } = location;

  return state.map((item) => {
    const { title, content, dob } = item;
    return (
      <div className="view-container">
        <h3>{title}</h3>
        <strong>{dob}</strong>
        <p>{content}</p>
      </div>
    );
  });
}

export default BookView;
