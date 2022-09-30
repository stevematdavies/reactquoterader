import {NoQuotesFound, QuoteList, Spinner} from "../components";
import {useHttp} from "../hooks";
import {getAllQuotes} from "../lib/api";
import {useEffect} from "react";

const AllQuotesPage = () => {

    const {sendRequest, status, data: loadedQuotes, error} = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest()
    }, [sendRequest])

    if (status === "pending") {
        return <div className="centered">
            <Spinner/>
        </div>
    }

    if (error) {
        return <p className="centered focused">
            {error}
        </p>
    }

    if (status === "completed" && (!loadedQuotes)) {
        return <NoQuotesFound/>
    }

    return <QuoteList quotes={loadedQuotes}/>
};

export default AllQuotesPage;