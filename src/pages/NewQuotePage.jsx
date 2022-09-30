import {QuoteForm} from "../components";
import { useNavigate } from "react-router-dom";
import {useHttp} from "../hooks";
import {addQuote} from "../lib/api";
import {useEffect} from "react";

const NewQuotePage = () => {

    const navigator = useNavigate()

    const { sendRequest, status } = useHttp(addQuote)

    useEffect(() =>{
        if (status === 'completed'){
            navigator("/quotes")
        }
    },[status,navigator])

    const onAddQuote = newQuote => {
        sendRequest(newQuote);
    }

    return <QuoteForm isLoading={status === "pending"} onAddQuote={onAddQuote}/>
};

export default NewQuotePage;