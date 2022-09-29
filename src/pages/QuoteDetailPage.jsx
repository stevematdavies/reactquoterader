import {Redirect, Route, useParams} from "react-router-dom";
import {Comments, HighlightedQuote} from "../components";
import quotes from "../data/quotedata.json"

const QuoteDetailPage = () => {

    const params = useParams();
    const quote = quotes.find(q => q.id === params.id)

    return <>
        <HighlightedQuote {...quote} />
        <Route path={`/quotes/quote/${params.id}/comments`}>
            <Comments />
        </Route>
        <Route path={`/quotes/quote/comments`}>
            <Redirect to='/quotes' />
        </Route>
    </>
};

export default QuoteDetailPage;