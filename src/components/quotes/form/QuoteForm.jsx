import {Fragment, useRef, useState} from 'react';
import classes from './QuoteForm.module.css';
import {Card, Spinner} from '../../';
import {Prompt} from "react-router-dom";

const QuoteForm = ({onAddQuote, isLoading}) => {
    const authorInputRef = useRef();
    const textInputRef = useRef();

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredAuthor = authorInputRef.current.value;
        const enteredText = textInputRef.current.value;

        // optional: Could validate here

        onAddQuote({author: enteredAuthor, text: enteredText});
    }

    const {enteredForm, setEnteredForm} = useState(false)

    const onFormFocus = () => {
        setEnteredForm(true)
    }

    return (
        <Fragment>
            <Prompt when={enteredForm} message={() => "Are you sure you want to leave, all your data will be lost?"} />
            <Card>
                <form className={classes.form} onSubmit={submitFormHandler} onFocus={onFormFocus}>
                    {isLoading && (
                        <div className={classes.loading}>
                            <Spinner/>
                        </div>
                    )}

                    <div className={classes.control}>
                        <label htmlFor='author'>Author</label>
                        <input type='text' id='author' ref={authorInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='text'>Text</label>
                        <textarea id='text' rows='5' ref={textInputRef} ></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button className='btn'>Add Quote</button>
                    </div>
                </form>
            </Card>
        </Fragment>
    );
};

export default QuoteForm;
