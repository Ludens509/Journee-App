import { useState, useMemo, useEffect, useCallback } from "react";
// import cardsData from "../../data";
import CardPost from "../Card/CardPost";
// import { useUser } from "../../context/userContext";


function PaginationComponent({ data }) {
  // const { user, post } = useUser();
  // console.log("user in PaginationComponent:", user);
  // console.log("post in PaginationComponent:", post);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // memoize total pages
  const totalPages = useMemo(
    () => Math.max(1, Math.ceil((data?.length || 0) / itemsPerPage)),
    [data, itemsPerPage]
  );

  // ensure currentPage is within bounds when data changes
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const indexOfLastItem = useMemo(
    () => currentPage * itemsPerPage,
    [currentPage, itemsPerPage]
  );

  const indexOfFirstItem = useMemo(
    () => indexOfLastItem - itemsPerPage,
    [indexOfLastItem, itemsPerPage]
  );

  // memoized slice for current items
  const currentItems = useMemo(() => {
    if (!data || data.length === 0) return [];
    return data.slice(indexOfFirstItem, indexOfLastItem);
  }, [data, indexOfFirstItem, indexOfLastItem]);

  // page numbers array
  const pageNumbers = useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }, [totalPages]);

  // handlers
  const handlePageChange = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  }, [totalPages]);

  return (
    <>
      {/* render each item as its own CardPost for better reconciliation */}
      <div className="space-y-4">
        {currentItems.length > 0 ? (
          <CardPost data={currentItems} />
        ) : (
          <div className="p-4 text-center text-gray-500">No posts found.</div>
        )}
      </div>

      {/* pager */}
      <nav aria-label="Pagination" className="mt-4">
        <ul className="flex justify-center gap-3 text-gray-900 items-center">
          <li>
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180 disabled:opacity-50"
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
            <li key={num}>
              <button
                onClick={() => handlePageChange(num)}
                aria-current={num === currentPage ? "page" : undefined}
                aria-label={`Go to page ${num} of ${totalPages}`}
                className={`px-3 py-1 rounded ${
                  num === currentPage
                    ? "font-bold bg-gray-100"
                    : "text-sm/8 font-medium tracking-widest"
                }`}
              >
                {num}
              </button>
            </li>
          ))}

          <li>
            <button
              type="button"
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180 disabled:opacity-50"
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
      </nav>
      
    </>
  );
}

// PaginationComponent.propTypes = {
//   data: PropTypes.array.isRequired,
// };

export default PaginationComponent;
