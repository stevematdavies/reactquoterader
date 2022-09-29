import {Redirect, Route, Switch} from "react-router-dom";
import {AllQuotesPage, NewQuotePage, PageNotFound, QuoteDetailPage} from "./pages";
import {Layout} from "./components/layout";


function App() {
  return (

    <Layout>
        <Switch>

            <Route path="/" exact>
                <Redirect to="/quotes" />
            </Route>

            <Route path="/quotes" exact>
                <AllQuotesPage />
            </Route>

            <Route path="/quotes/quote/:id">
                <QuoteDetailPage />
            </Route>

            <Redirect from="/quotes/quote/" to="/quotes" />


            <Route path="/quotes/new-quote">
                <NewQuotePage />
            </Route>

            <Route path="*">
                <PageNotFound />
            </Route>



        </Switch>
    </Layout>
  );
}

export default App;
