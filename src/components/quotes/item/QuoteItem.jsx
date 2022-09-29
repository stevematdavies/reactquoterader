import classes from './QuoteItem.module.css';
import {Link} from "react-router-dom";

const QuoteItem = ({id, text, author}) => (
    <li className={classes.item}>
        <figure>
            <blockquote>
                <p>{text}</p>
            </blockquote>
            <figcaption>{author}</figcaption>
        </figure>
        <Link className='btn' to={`/quotes/quote/${id}`}>
            Quote details
        </Link>
    </li>
)

export default QuoteItem;
