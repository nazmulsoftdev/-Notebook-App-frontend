import React from "react";
import { Pagination } from "react-pagination-bar";
import "react-pagination-bar/dist/index.css";
import "./PaginationBar.css";
function PagigationBar({
  currentPage,
  itemsPerPage,
  onPageChange,
  startLabel,
  totalItems,
  pageNeighbours,
  endLabel,
  nextLabel,
  prevLabel,
}) {
  return (
    <div className="pagination-container">
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={onPageChange}
        totalItems={totalItems}
        pageNeighbours={pageNeighbours}
        startLabel={startLabel}
        endLabel={endLabel}
        nextLabel={nextLabel}
        prevLabel={prevLabel}
      />
    </div>
  );
}

export default PagigationBar;
