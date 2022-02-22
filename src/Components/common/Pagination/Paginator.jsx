import React, { useState } from 'react'
import style from './Paginator.module.css';

import Pagination from '@material-ui/lab/Pagination';

export default function Paginator({ portionSize = 5, pageSize, totalItemsCount, ...props }) {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)


    // let pages = []
    // for (let x = 1; x <= pagesCount; x++) {
    //     pages.push(x)
    // }

    // let [portionNumber, setPortionNumber] = useState(1);
    // let portionCount = Math.ceil(pagesCount / portionSize);
    // let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    // let rightPortionPageNumber = portionNumber * portionSize;

    return (
        // <div style={{ width: 700 + 'px' }}>
        //     {portionNumber > 1 &&
        //         <button onClick={() => { setPortionNumber(portionNumber - 1) }} className={style.sendBtn}>Prev</button>
        //     }
        //     {
        //         pages
        //         .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        //         .map((p) => {
        //             return (
        //                 <button key={p} style={{ marginRight: 10 + 'px', marginLeft: 10 + 'px', display: 'inline' }} onClick={() => { props.onChangePage(p) }} className={`${props.currentPage === p && style.selectedPage} ${style.sendBtn}`}>{p}</button>
        //             )
        //         })
        //     }
        //     {portionCount > portionNumber &&
        //         <button onClick={() => { setPortionNumber(portionNumber + 1) }} className={style.sendBtn}>Next</button>}
        // </div>
        <Pagination 
            page={props.currentPage}
            count={pagesCount} 
            color="primary"
            siblingCount={2}
            onChange={(event, page) => {props.onChangePage(page)}} />
    )
}
