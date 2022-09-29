import {QuoteList} from "../components";

import quotes from "../data/quotedata.json"

const AllQuotesPage = () => {
    return <QuoteList quotes={quotes} />
};

export default AllQuotesPage;