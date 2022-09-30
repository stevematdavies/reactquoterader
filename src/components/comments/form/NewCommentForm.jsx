import {useEffect, useRef} from 'react';

import classes from './NewCommentForm.module.css';
import {useHttp} from "../../../hooks";
import {addComment} from "../../../lib/api";
import {Spinner} from "../../index";


const NewCommentForm = ({quoteId, onCommentAdded}) => {
    const commentTextRef = useRef();
    const {sendRequest, status, error} = useHttp(addComment)

    useEffect(() => {
        if (status === "completed" && !error) {
            onCommentAdded();
        }
    }, [status, error, onCommentAdded])

    const submitFormHandler = (event) => {
        event.preventDefault();
        sendRequest({
            text: commentTextRef.current.value,
            quoteId
        })
    };

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            {status === "pending" && <div className="centered"><Spinner/></div>}
            <div className={classes.control} onSubmit={submitFormHandler}>
                <label htmlFor='comment'>Your Comment</label>
                <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button className='btn'>Add Comment</button>
            </div>
        </form>
    );
};

export default NewCommentForm;
