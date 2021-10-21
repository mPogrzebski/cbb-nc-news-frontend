import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Topics from "./components/Topics/Topics";
import Topic from "./components/Topics/Topic";
import Article from "./components/Articles/Article";
import Articles from "./components/Articles/Articles";
import Page404 from "./components/Page404";
import Search from "./components/Search";
import Enter from "./components/User/Enter";
import { useContext, useEffect } from "react";
import { UserContext } from "./contexts/User";

function App() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      setUser(localStorage.getItem("user"));
    }
  }, []);

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
