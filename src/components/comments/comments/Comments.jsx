import {useCallback, useEffect, useState} from 'react';

import classes from './Comments.module.css';
import {CommentsList, NewCommentForm, Spinner} from "../../";
import {useParams} from "react-router-dom";
import {useHttp} from "../../../hooks";
import {getAllComments} from "../../../lib/api";
import {isPresent} from "../../../lib/helpers";

const Comments = () => {
    const [isAddingComment, setIsAddingComment] = useState(false);

    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };

    const {sendRequest, status, data: fetchedComments} = useHttp(getAllComments)
    const {id: quoteId} = useParams()

    useEffect(() => {
        sendRequest(quoteId)
    }, [quoteId, sendRequest])

    const onCommentAdded = useCallback(() => {
        sendRequest(quoteId)
    },[quoteId, sendRequest])

    const getCommentsElement = () => {
        if (status === "pending") {
            return <div className="centered">
                <Spinner/>
            </div>
        }

        if (status === "completed" && isPresent(fetchedComments)) {
            return <CommentsList comments={fetchedComments}/>
        }

        if (status === "completed" && !isPresent(fetchedComments)) {
            return <p className="centered">
                No comments added yet.
            </p>
        }

        return null;
    }



    return (
        <section className={classes.comments}>
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className='btn' onClick={startAddCommentHandler}>
                    Add a Comment
                </button>
            )}
            {isAddingComment && <NewCommentForm quoteId={quoteId} onCommentAdded={onCommentAdded}/>}
            {getCommentsElement()}
        </section>
    );
};

export default Comments;
