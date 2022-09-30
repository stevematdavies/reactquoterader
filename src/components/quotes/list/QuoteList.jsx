import {Fragment} from 'react';

import {QuoteItem} from '../../';
import classes from './QuoteList.module.css';
import {useNavigate, useLocation} from "react-router-dom";


const sortQuotes = (quotes, isAsc) =>
    quotes.sort((qa, qb) => isAsc
        ? qa.text > qb.text ? 1 : -1
        : qa.text < qb.text ? 1 : -1
    )

const QuoteList = ({quotes}) => {

    const SortBy = {
        ASC: "ASC",
        DEC: "DEC"
    }

    const {search, pathname} = useLocation()
    const queryParams = new URLSearchParams(search)
    const isSortAscending = queryParams.get('sort') === "ASC";


    const navigator = useNavigate()

    const sortedQuotes = sortQuotes(quotes, isSortAscending)

    const sort = () => {
        const d = isSortAscending ? SortBy.DEC : SortBy.ASC
        navigator(`${pathname}?sort=${d}`)
    }

    return (
        <Fragment>
            <div className={classes.sorting}>
                <button onClick={sort}>
                    {`Sort by quote text:  ${isSortAscending ? 'Descending' : 'Ascending'}`}
                </button>
            </div>
            <ul className={classes.list}>
                {sortedQuotes.map((quote) => <QuoteItem key={quote.id}{...quote} />)}
            </ul>
        </Fragment>
    );
};

export default QuoteList;
