import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Topics from "./components/Topics";
import Article from "./components/Articles/Article";
import Articles from "./components/Articles/Articles";
import Page404 from "./components/Page404";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/topics">
            <Topics />
          </Route>

          <Route exact path="/articles">
            <Articles />
          </Route>

          <Route exact path="/articles/:article_id">
            <Article />
          </Route>


          <Route>
            <Page404 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
