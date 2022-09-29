import {QuoteForm} from "../components";
import {useHistory} from "react-router-dom";

const NewQuotePage = () => {

    const history = useHistory()

    const onAddQuote = newQuote => {
        history.push("/quotes")
    }

    return <QuoteForm onAddQuote={onAddQuote}/>
};

export default NewQuotePage;