import React from "react";
// import PropTypes from "prop-types";
import CardPost from "../Card/CardPost";

function PaginationComponent({ data }) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 5;

  //Calculateion of the index of the first and last item for slicing

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data
    ? data.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  //calculate total Pages
  const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  return (
    <>
      {/* {currentItems.map((item) => (
        <div key={item.id} className="p-4 border-b border-gray-200">
          <CardPost data={item} />
        </div>
      ))} */}
      <CardPost data={currentItems} />
      <ul className="flex justify-center gap-3 text-gray-900">
        <li>
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
            aria-label="Previous page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => handlePageChange(num)}
            className={
              num === currentPage
                ? "font-bold"
                : "text-sm/8 font-medium tracking-widest"
            }
          >
            {`${num}/${totalPages}`}
          </button>
        ))}
        <li>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
            aria-label="Next page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ul>
    </>
  );
}

// PaginationComponent.propTypes = {
//   data: PropTypes.array.isRequired,
// };

export default PaginationComponent;
