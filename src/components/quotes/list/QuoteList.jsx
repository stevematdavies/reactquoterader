import { Fragment } from 'react';

import {QuoteItem} from '../../';
import classes from './QuoteList.module.css';

const QuoteList = ({quotes}) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {quotes.map((quote) => <QuoteItem key={quote.id}{...quote} />)}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
