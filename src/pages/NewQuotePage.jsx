import {QuoteForm} from "../components";

const NewQuotePage = () => {

    const onAddQuote = newQuote => {
        console.log(newQuote)
    }

    return <QuoteForm onAddQuote={onAddQuote}/>
};

export default NewQuotePage;