import {Navigate, Route, Routes} from "react-router-dom";
import {AllQuotesPage, NewQuotePage, PageNotFound, QuoteDetailPage} from "./pages";
import {Layout} from "./components/layout";

function App() {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={ <Navigate to="/quotes" />}/>
            <Route path="/quotes" element={<AllQuotesPage />} />
            <Route path="/quotes/quote/:id/*" element={<QuoteDetailPage />} />
            <Route path="/quotes/new-quote" element={ <NewQuotePage />} />>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </Layout>
  );
}
export default App;
