import React from 'react'
import { usePaginationProps } from '../App';

const Pagination = () => {
    const {pagination, onPageChange} = usePaginationProps();
    const { _page, _limit, _totalRows } = pagination;
    const numberOfPages = Math.ceil(_totalRows / _limit);
    function handlePageChange(newPage:any) {
        if (onPageChange) {
            onPageChange(newPage);
        }
    }
  return (
    <div>
        <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1) }>
            Prev
        </button>

        <button disabled={_page >= numberOfPages} onClick={() => handlePageChange(_page + 1) }>
            Next
        </button>
    </div>
  )
}

export default Pagination;
