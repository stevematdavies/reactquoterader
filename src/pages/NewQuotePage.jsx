import {QuoteForm} from "../components";
import {useHistory} from "react-router-dom";
import {useHttp} from "../hooks";
import {addQuote} from "../lib/api";
import {useEffect} from "react";

const NewQuotePage = () => {

    const history = useHistory()

    const { sendRequest, status } = useHttp(addQuote)

    useEffect(() =>{
        if (status === 'completed'){
            history.push("/quotes")
        }
    },[status, history])

    const onAddQuote = newQuote => {
        sendRequest(newQuote);
    }

    return <QuoteForm isLoading={status === "pending"} onAddQuote={onAddQuote}/>
};

export default NewQuotePage;