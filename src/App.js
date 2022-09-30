import {Navigate, Route, Routes} from "react-router-dom";
import {AllQuotesPage, Matched, NewQuotePage, PageNotFound, QuoteDetailPage} from "./pages";
import {Layout} from "./components/layout";
import {Comments} from "./components";

function App() {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={ <Navigate replace to="/quotes" />}/>
            <Route path="/quotes" element={<AllQuotesPage />} />
            <Route path="/quotes/quote/:id/*" element={<QuoteDetailPage />} >
                <Route path="comments" element={<Comments />} />
                <Route path="" element={<Matched />} />
            </Route>
            <Route path="/quotes/new-quote" element={ <NewQuotePage />} />>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </Layout>
  );
}
export default App;
