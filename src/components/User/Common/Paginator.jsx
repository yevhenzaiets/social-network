import React, {useState} from "react";
import styles from "./Paginator.module.css"

let Paginator = ({totalUsersCount,pageSize,currentPage,onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [numberPage, changeNumberPage] = useState(1)
    let leftPortion = (numberPage - 1) * pageSize + 1
    let rightPortion = numberPage * pageSize


    return <div>
        <div className={styles.paginator}>
            {numberPage > 1 &&
            <button onClick={ () => changeNumberPage(numberPage - 1) }> Previous </button>}
            {pages
                .filter(p => p >= leftPortion && p <= rightPortion)
                .map(p => {
                    return <span className={currentPage === p && styles.currentPage}
                                 key={p}
                                 onClick={(e) => {
                                     onPageChanged(p)
                                 }}> {p} </span>
                })}
            {portionCount > numberPage &&
            <button onClick={() => { changeNumberPage(numberPage + 1 )} }> Next </button>}
        </div>
    </div>
}

export default Paginator