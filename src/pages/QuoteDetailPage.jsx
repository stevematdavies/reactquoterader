import {Link, Route, Routes, useLocation, useParams} from "react-router-dom";
import {Comments, HighlightedQuote, NoQuotesFound, Spinner} from "../components";
import {useHttp} from "../hooks";
import {getSingleQuote} from "../lib/api";
import {Fragment, useEffect} from "react";


export const Matched = () => (
    <div className="centered">
        <Link to={`comments`} className="btn--flat">
            Load Comments
        </Link>
    </div>
)

const QuoteDetailPage = () => {

    const params = useParams();
    const qoteId = params.id;
    const { pathname } = useLocation()

    const { sendRequest , status, data: quote, error } = useHttp(getSingleQuote, true)

    useEffect(() => {
        sendRequest(qoteId)
    },[sendRequest, qoteId])

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

    if (status === "completed" && (!quote)) {
        return <NoQuotesFound/>
    }

    console.log(pathname)

    return <Fragment>
            <HighlightedQuote {...quote} />
            <Routes>
                <Route path="comments" element={<Comments />} />
                <Route path="" element={<Matched />} />
            </Routes>
        </Fragment>
};

export default QuoteDetailPage;