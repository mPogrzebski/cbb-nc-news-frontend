import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Article from "./components/Articles/Article";
import Articles from "./components/Articles/Articles";
import Nav from "./components/Header/Nav";

import Main from "./components/Main";

import Page404 from "./components/Page404";
import Search from "./components/Search";
import Topic from "./components/Topics/Topic";
import Topics from "./components/Topics/Topics";
import Enter from "./components/User/Enter";
import { UserContext } from "./contexts/User";


function App() {
  const {  setUser } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      setUser(localStorage.getItem("user"));
    }
  }, [setUser]);

  return (
    <BrowserRouter>
      <div className="flex is-justify-content-center is-align-content-center container is-max-desktop">
        <Nav/>
        <h1 className="mt-5 title has-text-centered">Welcome to CBB news!</h1>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/topics">
            <Topics />
          </Route>

          <Route exact path="/topics/:topic">
            <Topic />
          </Route>

          <Route exact path="/articles">
            <Articles />
          </Route>

          <Route exact path="/search">
            <Search />
          </Route>

          <Route exact path="/enter">
            <Enter />
          </Route>

          <Route exact path="/enter/:new_user">
            <Enter />
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
