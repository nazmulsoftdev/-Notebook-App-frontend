import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookEdit.css";
import Input from "../../../components/Input";
import axios from "../../../axios";

function BookEdit() {
  const [updateId, setUpdateId] = useState("");
  const [title, setTitle] = useState("");
  const [bookContent, setBookContent] = useState("");
  const [dob, setDob] = useState("");
  const location = useLocation();
  const { state } = location;

  const navigate = useNavigate();

  useEffect(() => {
    state.map((item) => {
      const { id, title, dob, content } = item;
      return (
        <>
          {setUpdateId(id)}
          {setTitle(title)}
          {setDob(dob)}
          {setBookContent(content)}
        </>
      );
    });
  }, [state]);

  const BookFormHandle = async (evn) => {
    evn.preventDefault();

    if (title && dob && bookContent) {
      axios
        .put(`/bookList/${updateId}`, {
          title: title,
          dob: dob,
          bookContent: bookContent,
        })
        .then((response) => {
          window.alert(response.data.message);
          setTitle("");
          setDob("");
          setBookContent("");
          navigate(-1);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="edit-book-form">
      <form onSubmit={BookFormHandle}>
        <label>Title:</label>
        <Input
          className="edit-book-Input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required={true}
        />
        <label>Date Time:</label>
        <Input
          className="edit-book-Input"
          type="text"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required={true}
        />
        <label>Content:</label>
        <textarea
          rows="15"
          cols="52"
          value={bookContent}
          onChange={(e) => setBookContent(e.target.value)}
          required={true}
        />
        <button className="editBook-btn">Update</button>
      </form>
    </div>
  );
}

export default BookEdit;
