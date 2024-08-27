const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getDisplayedPages = () => {
    const pages = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage === 1) {
        pages.push(1, 2, 3);
      } else if (currentPage === totalPages) {
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }
    }
    return pages;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const displayedPages = getDisplayedPages();
  return (
    <div className="grid sm:grid-cols-2 gap-10 sm:gap-0 place-items-center sm:place-items-end m-10 border-t pt-10 text-sm sm:text-base">
      <div className="flex gap-2 sm:gap-5">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg text-lightBlack border ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer font-medium"
          }`}
          aria-label="Previous Page"
        >
          Prev
        </button>
        {displayedPages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 rounded-full hover:bg-gray-300 hover:text-darkBlack border  ${
              page === currentPage
                ? "bg-darkBlack text-white hover:border-darkBlack"
                : "bg-gray-200"
            } `}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg text-lightBlack border ${
            currentPage === totalPages
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer font-medium"
          }`}
          aria-label="Next Page"
        >
          Next
        </button>
      </div>
      <span className="mx-2 text-lightBlack place-self-end">{`Page ${currentPage} of ${totalPages}`}</span>
    </div>
  );
};

export default Pagination;
