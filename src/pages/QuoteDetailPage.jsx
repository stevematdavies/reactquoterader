import {Link, Route, useParams, useRouteMatch} from "react-router-dom";
import {Comments, HighlightedQuote, NoQuotesFound} from "../components";
import quotes from "../data/quotedata.json"

const QuoteDetailPage = () => {

    const params = useParams();
    const match = useRouteMatch();
    const quote = quotes.find(q => q.id === params.id)

    if (!quote) {
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