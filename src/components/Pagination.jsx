import React from 'react';
import '../stylesheets/index.scss';

const Pagination = props => {
  return (
      <ul className="nav pagination pagination-lg">
        <li className="page-item">
          <a href="" className="page-link">Previous</a>
        </li>
        <li className="page-item">
          <a href="" className="page-link">1</a>
        </li>
        <li className="page-item">
          <a href="" className="page-link">Next</a>
        </li>
        <li className="page-item">
          <a href="" className="page-link">Total: </a>
        </li>
      </ul>
  )
};

export default Pagination;
