import React from "react";
import { CiEdit as EditIcon } from "react-icons/ci";
import { AiFillEye as ViewIcon } from "react-icons/ai";
import { AiOutlineDelete as DeleteIcon } from "react-icons/ai";
import "./BookCard.css";
import axios from "../../../axios";
import { Link } from "react-router-dom";
function BookCard({ posts, currentPage, pagePostsLimit }) {
  // Delete Item from database

  const DeleteItem = (id) => {
    const deletePermission = window.confirm("do you want to delete is ?");
    if (!deletePermission) {
      return false;
    } else {
      axios
        .delete(`/booksList/${id}`)
        .then((response) => {
          alert(response.data.message);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="book-card-container">
      {posts
        .slice((currentPage - 1) * pagePostsLimit, currentPage * pagePostsLimit)
        .map((post) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <marquee direction="right">
              <small>{post.dob}</small>
            </marquee>
            <div className="icon-box-wrapper">
              <div className="icon-container">
                <Link
                  to="eidtBook"
                  state={[
                    {
                      id: post._id,
                      title: post.title,
                      content: post.bookContent,
                      dob: post.dob,
                    },
                  ]}
                >
                  <EditIcon className="action-Icon" color="#27ae60" />
                </Link>
                <Link
                  to="viewBook"
                  state={[
                    {
                      title: post.title,
                      content: post.bookContent,
                      dob: post.dob,
                    },
                  ]}
                >
                  <ViewIcon className="action-Icon" />
                </Link>
                <DeleteIcon
                  className="action-Icon"
                  color="#d63031"
                  onClick={() => DeleteItem(post._id)}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BookCard;
