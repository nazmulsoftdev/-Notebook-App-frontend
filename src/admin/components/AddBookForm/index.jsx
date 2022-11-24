import React, { useState } from "react";
import Input from "../../../components/Input";
import "./AddBookForm.css";
import dateFormat from "dateformat";
import axios from "../../../axios";
function AddBookForm() {
  const [title, setTitle] = useState("");
  const [bookContent, setBookContent] = useState("");
  const [dob, setDob] = useState("");

  const now = new Date();

  dateFormat(now, "isoDateTime");
  const PostSuccess = "Successfully Add New";

  const BookFormHandle = async (evn) => {
    evn.preventDefault();
    setDob(now, "fullDate");
    if (title && bookContent) {
      axios
        .post("/addNoote", { title: title, dob: dob, bookContent: bookContent })
        .then((response) => {
          if (response.data.message === PostSuccess) {
            alert("New Post Added");
            setTitle("");
            setBookContent("");
          }
        })
        .catch((err) => alert("Sorry Can not add new Item"));
    }
  };

  return (
    <div className="add-book-form">
      <form onSubmit={BookFormHandle}>
        <label>Title:</label>
        <Input
          className="add-book-Input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
        <button className="addBook-btn">Submit</button>
      </form>
    </div>
  );
}

export default AddBookForm;
