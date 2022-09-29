import {useState} from 'react';

import classes from './Comments.module.css';
import {QuoteForm} from "../../";

const Comments = () => {
    const [isAddingComment, setIsAddingComment] = useState(false);

    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };

    return (
        <section className={classes.comments}>
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className='btn' onClick={startAddCommentHandler}>
                    Add a Comment
                </button>
            )}
            {isAddingComment && <QuoteForm/>}
            <p>Comments...</p>
        </section>
    );
};

export default Comments;
