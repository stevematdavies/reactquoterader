import {Link, Route, useParams, useRouteMatch} from "react-router-dom";
import {Comments, HighlightedQuote, NoQuotesFound, Spinner} from "../components";
import {useHttp} from "../hooks";
import {getSingleQuote} from "../lib/api";
import {useEffect} from "react";

const QuoteDetailPage = () => {

    const params = useParams();
    const qoteId = params.id;
    const match = useRouteMatch();

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

    return <>
        <HighlightedQuote {...quote} />
        <Route path={match.path} exact>
            <div className="centered">
                <Link to={`${match.url}/comments`} className="btn--flat">
                    Load Comments
                </Link>
            </div>
        </Route>
        <Route path={`${match.path}/comments`}>
            <Comments/>
        </Route>
    </>
};

export default QuoteDetailPage;