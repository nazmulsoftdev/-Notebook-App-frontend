import React, { useState, useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import BookCard from "../components/BookCard";
import PaginationBar from "../components/Pagination";
import axios from "../../axios";

function Book() {
  const [searchInput, setSearchInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 6;

  useEffect(() => {
    axios
      .get("/booksList")
      .then((response) => setPosts(response.data))
      .catch((err) => console.log(err));
  }, []);

  // handle search input

  const HandleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  // filter by name

  const FilterName = posts.filter((Title) => {
    return Title.title.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <div>
      <AdminHeader value={searchInput} HandleSearchInput={HandleSearchInput} />
      <BookCard
        posts={FilterName}
        currentPage={currentPage}
        pagePostsLimit={pagePostsLimit}
      />
      <div>
        <PaginationBar
          currentPage={currentPage}
          itemsPerPage={pagePostsLimit}
          onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
          totalItems={posts.length}
          pageNeighbours={3}
          startLabel={"Start"}
          endLabel={"End"}
          nextLabel={">"}
          prevLabel={"<"}
        />
      </div>
    </div>
  );
}

export default Book;
