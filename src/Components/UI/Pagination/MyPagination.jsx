import React from 'react'
import { getPagesArray } from '../../../utils/pages'

const MyPagination = ({totalPages, page, updPage}) => {
    
    let pagesArray = getPagesArray(totalPages)

    return (
        <div className='pages'>
            {pagesArray.map(p => 
            <span
                className={page === p ? 'page page-active' : 'page'}
                onClick={() => updPage(p)}
                key={p}
            >
                {p}
            </span>
            )}
        </div>
  )
}

export default MyPagination
