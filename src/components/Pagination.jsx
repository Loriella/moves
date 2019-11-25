import React from 'react';
import '../stylesheets/index.scss';
import classNames from 'classnames';

const Pagination = props => {
  const { currentPage, totalPages, updatePage} = props;

  const handleClick = value => {
    if (value > 0 && value <= totalPages) {
      updatePage(value)
    }
  };

  return (
      <ul className="nav pagination pagination-lg">
        <li
          className={classNames("page-item", {"disabled" : currentPage === 1})}
          onClick={() => handleClick(currentPage - 1)}
        >
          <div className="page-link">Previous</div>
        </li>
        <li className="page-item active">
          <div className="page-link">Page {currentPage} of {totalPages}</div>
        </li>
        <li
          className={classNames("page-item", {"disabled" : currentPage === totalPages})}
          onClick={() => handleClick(currentPage + 1)}
        >
          <div className="page-link">Next</div>
        </li>
      </ul>
  )
};

export default Pagination;
